<script setup lang="ts">
import type {
    Course,
    StudentCourse,
    StudentWord,
    Word,
    TestWordsItemOption,
    TestWordsItem,
    TestWordsLesson
} from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getCourseRepository } from '../repositories/CourseFirebase';

const WORDS_IN_LESSON = 10;
const WORDS_IN_ITEM = 4;
const CHANGE_TIMEOUT = 2 * 1000;

const courseId: string | string[] = useRoute().params.id;

const courseRepository = getCourseRepository(undefined);

const success = ref({
    message: ''
});
const error = ref({
    message: ''
});
const successCount = ref(0);
const errorCount = ref(0);

let lessonObj: TestWordsLesson = {
    title: '',
    words: [],
    completed: false
};
const lessonObjRef = ref(lessonObj);

let studentCourse: StudentCourse;
let activeItem = 0;

const getCourseData = async (): Promise<void> => {
    try {
        studentCourse = await courseRepository.getStudentCourseById(
            String(courseId)
        );

        const course: Course | undefined = await courseRepository.getCourseById(
            studentCourse.course_id
        );
        if (!course) return;

        const words = await courseRepository.getAllWords({
            topic: course.topic
        });
        const wordsById = words.reduce((acc, wordObj) => {
            acc.set(wordObj.id, wordObj);
            return acc;
        }, new Map());

        lessonObjRef.value.title = course.title;

        const studentWords = studentCourse.words.sort(
            (a, b) => a.learned_at - b.learned_at
        );

        let id = WORDS_IN_LESSON * WORDS_IN_ITEM;
        for (let i = 0; i < WORDS_IN_LESSON; ++i) {
            const sw = studentWords[i];
            const options: TestWordsItemOption[] = [];
            const rId = Math.round(Math.random() * (WORDS_IN_ITEM - 2));

            for (let j = 0; j < WORDS_IN_ITEM - 1; ++j) {
                const optW = studentWords[++id];
                options.push({
                    id: optW.id,
                    word: wordsById.get(optW.id).word,
                    tr_ru: wordsById.get(optW.id).tr_ru,
                    error: false,
                    success: false
                });
                if (j == rId) {
                    options.push({
                        id: sw.id,
                        word: wordsById.get(sw.id).word,
                        tr_ru: wordsById.get(sw.id).tr_ru,
                        error: false,
                        success: false
                    });
                }
            }

            lessonObjRef.value.words.push({
                word: wordsById.get(sw.id),
                options: options,
                success: false,
                completed: false,
                active: false
            });
        }

        lessonObjRef.value.words[activeItem].active = true;
    } catch (e) {
        console.log('e', e);
        error.value.message = e.message;
    }
};

const updateStudentCourseWords = async () => {
    try {
        if (!studentCourse) return;

        const leardedAt = Date.now();
        const wordsById = lessonObjRef.value.words.reduce((acc, val) => {
            acc.set(val.word.id, val.success ? 0 : 1);
            return acc;
        }, new Map());
        studentCourse.words.forEach((word) => {
            if (wordsById.has(word.id)) {
                word.errors += wordsById.get(word.id);
                word.learned_at = leardedAt;
            }
        });

        await Promise.all([
            courseRepository.updateStudentCourseWords(
                String(studentCourse.id),
                studentCourse.words
            ),
            courseRepository.updateStudentStats({
                student_id: studentCourse.student_id,
                course_id: studentCourse.course_id,
                error: errorCount.value,
                success: successCount.value
            })
        ]);
    } catch (e) {
        error.value.message = e.message;
    }
};

const selectCard = (option: TestWordsItemOption) => {
    if (option.word === lessonObjRef.value.words[activeItem].word.word) {
        option.success = true;
        lessonObjRef.value.words[activeItem].success = true;
        successCount.value += 1;
    } else {
        option.error = true;
        errorCount.value += 1;
    }

    setTimeout(() => {
        lessonObjRef.value.words[activeItem].completed = true;
        lessonObjRef.value.words[activeItem].active = false;

        activeItem += 1;
        if (activeItem === lessonObjRef.value.words.length) {
            lessonObjRef.value.completed = true;
            return updateStudentCourseWords();
        }
        lessonObjRef.value.words[activeItem].active = true;
    }, CHANGE_TIMEOUT);
};

onBeforeMount(async () => {
    await getCourseData();
});
</script>

<template>
    <main>
        <div class="dictionary">
            <div v-if="Boolean(error.message)">
                <div class="card item-error">
                    <p>{{ error.message }}</p>
                </div>
            </div>
            <div v-if="Boolean(success.message)">
                <div class="card item-success">
                    <p>{{ success.message }}</p>
                </div>
            </div>

            <h1>Dictionary</h1>
            <h3>{{ lessonObjRef.title }}</h3>
            <p>
                <b class="font-success">Success: {{ successCount }}</b>
                <span>&nbsp;</span>
                <b class="font-error">Error: {{ errorCount }}</b>
            </p>

            <div v-if="lessonObjRef.completed">
                <h3>Lesson is completed</h3>

                <div v-for="item in lessonObjRef.words" :key="item.word.word">
                    <p
                        :class="{
                            'font-success': item.success,
                            'font-error': !item.success
                        }"
                    >
                        {{ item.word.word }} - {{ item.word.tr_ru }}
                    </p>
                </div>
            </div>
            <div v-else class="lesson-item">
                <div v-for="item in lessonObjRef.words" :key="item.word.word">
                    <div v-if="item.active">
                        <h3>{{ item.word.tr_ru }}</h3>
                        <div class="card-wrapper">
                            <div
                                class="card"
                                :class="{
                                    'alert-success': option.success,
                                    'alert-error': option.error
                                }"
                                v-for="option in item.options"
                                :key="option.word"
                                v-on:click="selectCard(option)"
                            >
                                {{ option.word }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

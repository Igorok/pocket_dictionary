<script setup lang="ts">
import type {
    Course,
    StudentCourse,
    TestWordsItemOption,
    TestWordsLesson
} from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getWordsRepository } from '../repositories/WordsLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const WORDS_IN_LESSON = 50;
const WORDS_IN_ITEM = 4;
const CHANGE_TIMEOUT = 1000;

const courseId: string | string[] = useRoute().params.id;

const wordsRepository = getWordsRepository();
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

const getLessonData = async (): Promise<void> => {
    try {
        studentCourse = await courseRepository.getStudentCourseById(
            String(courseId)
        );

        const courses: Course[] = courseRepository.getCourses({
            type: 'words'
        });

        let course: Course | undefined | any = undefined;
        let otherTopics: String[] = [];
        courses.forEach((c: Course) => {
            if (c.id === studentCourse.course_id) {
                course = c;
            } else if (otherTopics.length < WORDS_IN_ITEM - 1) {
                otherTopics.push(c.topic);
            }
        });
        if (!course) return;

        // group words
        const words = wordsRepository.getAllWords({});
        const wordsById = new Map();
        const wordsByTopic = new Map();
        words.forEach((word) => {
            word.topics.forEach((topic) => {
                if (topic === studentCourse.topic) {
                    wordsById.set(word.id, word);
                }
                if (!wordsByTopic.has(topic)) {
                    wordsByTopic.set(topic, []);
                }
                wordsByTopic.get(topic).push(word);
            });
        });

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
                const topic = otherTopics[j];
                const otherWords = wordsByTopic.get(topic);
                const optId = Math.floor(Math.random() * otherWords.length);
                const optW = otherWords[optId];

                options.push({
                    id: optW.id,
                    word: optW.word,
                    tr_ru: optW.tr_ru,
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
        if (e instanceof Error) {
            error.value.message = e.message;
        }
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
        if (e instanceof Error) {
            error.value.message = e.message;
        }
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
    await getLessonData();
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

            <h3>Test: {{ lessonObjRef.title }}</h3>
            <p>
                <b class="font-success">Success: {{ successCount }}</b>
                <span>&nbsp;</span>
                <b class="font-error">Error: {{ errorCount }}</b>
            </p>

            <div v-if="lessonObjRef.completed">
                <h3>Lesson is completed</h3>
                <RouterLink
                    :to="{
                        name: 'course-words-test',
                        params: { id: courseId }
                    }"
                    class="btn btn-green"
                    >Continue testing
                </RouterLink>
                &nbsp;
                <RouterLink
                    :to="{
                        name: 'course-words-write',
                        params: { id: courseId }
                    }"
                    class="btn btn-green"
                    >Continue writing
                </RouterLink>
                <br />
                <br />
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

<script setup lang="ts">
import type { Course, StudentCourse } from '../dto/course';
import type { LessonWriteData } from '../dto/lesson';
import { cloneDeep } from 'lodash';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getWordsRepository } from '../repositories/WordsLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const WORDS_IN_LESSON = 10;

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

let lessonObj: LessonWriteData = {
    title: '',
    word: '',
    tr_ru: '',
    write_1: '',
    write_2: '',
    write_3: '',
    write: true,
    check: false,
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
        const studentWordsById = cloneDeep(studentCourse.words)
            .sort((a, b) => a.learned_at - b.learned_at)
            .slice(0, WORDS_IN_LESSON)
            .reduce((acc, word) => {
                acc.set(word.id, word);
                return acc;
            }, new Map());

        const course: Course|undefined = courseRepository.getCourseById(
            studentCourse.course_id
        );
        if (!course) {
            throw new Error('Course not found!');
        }
        lessonObjRef.value.title = course.title;

        const words = wordsRepository.getAllWords({ topic: course.topic });
        lessonObjRef.value.words = words
            .filter(({ id }) => studentWordsById.has(id))
            .map(({ id, word, tr_ru }) => ({
                id,
                word,
                tr_ru,
                error: false,
                success: false,
                active: false
            }));

        lessonObjRef.value.words[0].active = true;
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
            acc.set(val.id, val.success ? 0 : 1);
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

const applyWord = () => {
    if (lessonObjRef.value.write) {
        let word: string = lessonObjRef.value.words[activeItem].word;
        const parentheses: number = word.indexOf('(');
        if (parentheses !== -1) {
            word = word.slice(0, parentheses);
        }
        word = word.trim().toLowerCase();

        const write: string[] = [
            lessonObjRef.value.write_1.toLocaleLowerCase().trim(),
            lessonObjRef.value.write_2.toLocaleLowerCase().trim(),
            lessonObjRef.value.write_3.toLocaleLowerCase().trim()
        ];

        if (write.some((wr) => word !== wr)) {
            lessonObjRef.value.words[activeItem].error = true;
            return;
        }

        lessonObjRef.value.words[activeItem].error = false;
        lessonObjRef.value.words[activeItem].active = false;

        lessonObjRef.value.write_1 = '';
        lessonObjRef.value.write_2 = '';
        lessonObjRef.value.write_3 = '';

        activeItem += 1;

        if (activeItem === WORDS_IN_LESSON) {
            lessonObjRef.value.write = false;
            lessonObjRef.value.check = true;
            activeItem = 0;
        }

        lessonObjRef.value.words[activeItem].active = true;
        return;
    }

    let word: string = lessonObjRef.value.words[activeItem].word;
    const parentheses: number = word.indexOf('(');
    if (parentheses !== -1) {
        word = word.slice(0, parentheses);
    }
    word = word.trim().toLowerCase();
    const write: string = lessonObjRef.value.write_1.toLocaleLowerCase().trim();

    lessonObjRef.value.words[activeItem].active = false;
    if (word !== write) {
        lessonObjRef.value.words[activeItem].error = true;
        errorCount.value += 1;
    } else {
        lessonObjRef.value.words[activeItem].success = true;
        successCount.value += 1;
    }

    lessonObjRef.value.write_1 = '';
    activeItem += 1;

    if (activeItem === WORDS_IN_LESSON) {
        lessonObjRef.value.completed = true;
        updateStudentCourseWords();
    } else {
        lessonObjRef.value.words[activeItem].active = true;
    }
};

onBeforeMount(async () => {
    await getLessonData();
});
</script>

<template>
    <main>
        <div class="center-wrapper">
            <div class="center-container">
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

                <h3>Write {{ lessonObjRef.title }}</h3>
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

                    <div v-for="item in lessonObjRef.words" :key="item.id">
                        <p
                            :class="{
                                'font-success': item.success,
                                'font-error': item.error
                            }"
                        >
                            {{ item.word }} - {{ item.tr_ru }}
                        </p>
                    </div>
                </div>
                <div v-else class="lesson-item">
                    <div v-for="item in lessonObjRef.words" :key="item.id">
                        <div v-if="item.active">
                            <h3
                                :class="{
                                    'font-error': item.error
                                }"
                            >
                                <span v-if="lessonObj.write"
                                    >{{ item.word }} -
                                </span>
                                {{ item.tr_ru }}
                            </h3>
                            <br />
                            <form @submit.prevent="applyWord">
                                <input
                                    type="text"
                                    class="input-text"
                                    id="write_1"
                                    v-model="lessonObjRef.write_1"
                                    autocomplete="off"
                                    required
                                />
                                <br />
                                <input
                                    v-if="lessonObj.write"
                                    type="text"
                                    class="input-text"
                                    id="write_2"
                                    v-model="lessonObjRef.write_2"
                                    autocomplete="off"
                                    required
                                />
                                <br />
                                <input
                                    v-if="lessonObj.write"
                                    type="text"
                                    class="input-text"
                                    id="write_3"
                                    v-model="lessonObjRef.write_3"
                                    autocomplete="off"
                                    required
                                />
                                <br />

                                <button class="btn btn-green">Apply</button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import type {
    Course,
    StudentCourse,
    TenseSentence,
    TenseDescription
} from '../dto/course';
import type { LessonWriteTenseData } from '../dto/lesson';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getTensesRepository } from '../dao/TensesLocal';
import { getCourseRepository } from '../dao/CourseFirebase';

const WORDS_IN_LESSON = 3;

const courseId: string | string[] = useRoute().params.id;

const tensesRepository = getTensesRepository();
const courseRepository = getCourseRepository(undefined);

const success = ref({
    message: ''
});
const error = ref({
    message: ''
});
const successCount = ref(0);
const errorCount = ref(0);

let lessonObj: LessonWriteTenseData = {
    title: '',
    write_sentence: '',
    sentences: [],
    completed: false,
    check: false
};

const lessonObjRef = ref(lessonObj);

let studentCourse: StudentCourse;
let activeItem = 0;

const getLessonData = async (): Promise<void> => {
    try {
        studentCourse = await courseRepository.getStudentCourseById(
            String(courseId)
        );

        const course: Course | undefined = courseRepository.getCourseById(
            studentCourse.course_id
        );
        if (!course) {
            throw new Error('Course not found!');
        }
        lessonObjRef.value.title = course.title;

        const descriptions = tensesRepository.getDescriptions({
            topic: course.topic
        });
        const tenseIds = descriptions.map(({ id }) => id);
        const sentences = tensesRepository.getSentences({ tenseIds });
        const descriptionById: Map<string, TenseDescription> =
            descriptions.reduce((acc, item) => {
                acc.set(item.id, item);
                return acc;
            }, new Map());
        const sentencesById: Map<string, TenseSentence> = sentences.reduce(
            (acc, item) => {
                acc.set(item.id, item);
                return acc;
            },
            new Map()
        );

        studentCourse.words
            .sort((a, b) => a.learned_at - b.learned_at)
            .slice(0, WORDS_IN_LESSON)
            .forEach(({ id }) => {
                const sentenceObj = sentencesById.get(id);
                if (!sentenceObj) return;

                const { tense_id, sentence, tr_ru } = sentenceObj;
                const description = descriptionById.get(tense_id);

                lessonObjRef.value.sentences.push({
                    id,
                    tense_id,
                    tense: description?.title || '',
                    sentence,
                    tr_ru,
                    error: '',
                    success: false,
                    active: false
                });
            });

        lessonObjRef.value.sentences[0].active = true;
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
        const sentenceById = lessonObjRef.value.sentences.reduce((acc, val) => {
            acc.set(val.id, val.success ? 0 : 1);
            return acc;
        }, new Map());
        studentCourse.words.forEach((item) => {
            if (sentenceById.has(item.id)) {
                item.errors += sentenceById.get(item.id);
                item.learned_at = leardedAt;
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

const applySentence = async () => {
    const sentence: string = lessonObjRef.value.sentences[activeItem].sentence
        .replace(/\,*\.*/g, '')
        .trim()
        .toLowerCase();
    const writen: string = lessonObjRef.value.write_sentence
        .replace(/\,*\.*/g, '')
        .trim()
        .toLocaleLowerCase();

    if (sentence !== writen) {
        lessonObjRef.value.sentences[activeItem].error =
            lessonObjRef.value.write_sentence;
        if (lessonObjRef.value.check) {
            errorCount.value += 1;
        } else {
            return;
        }
    } else {
        lessonObjRef.value.sentences[activeItem].success = true;
        if (lessonObjRef.value.check) {
            successCount.value += 1;
        } else {
            lessonObjRef.value.sentences[activeItem].error = '';
        }
    }

    lessonObjRef.value.sentences[activeItem].active = false;
    lessonObjRef.value.write_sentence = '';

    activeItem += 1;

    if (activeItem === WORDS_IN_LESSON) {
        if (lessonObjRef.value.check) {
            lessonObjRef.value.completed = true;
            return await updateStudentCourseWords();
        }
        activeItem = 0;
        lessonObjRef.value.check = true;
    }

    lessonObjRef.value.sentences[activeItem].active = true;
};

onBeforeMount(async () => {
    await getLessonData();
});
</script>

<template>
    <main>
        <div class="tenses-write-wrapper">
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

            <!-- if -->
            <div v-if="lessonObjRef.completed">
                <h3>Lesson is completed</h3>
                <p>
                    <RouterLink
                        :to="{
                            name: 'course-tenses-read',
                            params: { id: studentCourse.course_id }
                        }"
                        class="btn btn-green"
                        >Read this course
                    </RouterLink>
                </p>
                <br />
                <div
                    v-for="item in lessonObjRef.sentences"
                    :key="item.id"
                    :class="{
                        'font-success': item.success,
                        'font-error': Boolean(item.error)
                    }"
                >
                    <p>{{ item.tr_ru }} ({{ item.tense }})</p>
                    <p>{{ item.sentence }}</p>
                    <p v-if="Boolean(item.error)">Wrong: {{ item.error }}</p>
                    <br />
                </div>
            </div>
            <!-- else -->
            <div v-else class="lesson-item">
                <div v-for="item in lessonObjRef.sentences" :key="item.id">
                    <div v-if="item.active">
                        <h4 :class="{ 'font-error': Boolean(item.error) }">
                            {{ item.tr_ru }} ({{ item.tense }})
                        </h4>
                        <p v-if="!lessonObjRef.check">{{ item.sentence }}</p>
                        <br />

                        <form @submit.prevent="applySentence">
                            <div>
                                <textarea
                                    type="text"
                                    class="input-text"
                                    id="write_sentence"
                                    v-model="lessonObjRef.write_sentence"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <br />
                            <button class="btn btn-green">Apply</button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

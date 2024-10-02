<script setup lang="ts">
import type { Course, StudentCourse } from '../dto/course';
import type { LessonWriteVerbData } from '../dto/lesson';
import { cloneDeep } from 'lodash';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getWordsRepository } from '../repositories/WordsLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const WORDS_IN_LESSON = 5;

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

let lessonObj: LessonWriteVerbData = {
    title: '',
    write_base_form: '',
    write_past_simple: '',
    write_past_participle: '',
    write: true,
    check: false,
    verbs: [],
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

        const course: Course|undefined = courseRepository.getCourseById(
            studentCourse.course_id
        );
        if (!course) {
            throw new Error('Course not found!');
        }
        lessonObjRef.value.title = course.title;

        const verbs = wordsRepository.getVerbs();
        const verbsById = verbs.reduce((acc, verb) => {
            acc.set(verb.id, verb);
            return acc;
        }, new Map());

        lessonObjRef.value.verbs = studentCourse.words
            .sort((a, b) => a.learned_at - b.learned_at)
            .slice(0, WORDS_IN_LESSON)
            .map(({ id }) => {
                const { base_form, past_simple, past_participle, tr_ru } = verbsById.get(id);
                return {
                    id,
                    base_form,
                    past_simple,
                    past_participle,
                    tr_ru,
                    error: false,
                    success: false,
                    active: false,
                }
            });

        lessonObjRef.value.verbs[0].active = true;
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
        const verbsById = lessonObjRef.value.verbs.reduce((acc, val) => {
            acc.set(val.id, val.success ? 0 : 1);
            return acc;
        }, new Map());
        studentCourse.words.forEach((verb) => {
            if (verbsById.has(verb.id)) {
                verb.errors += verbsById.get(verb.id);
                verb.learned_at = leardedAt;
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

const applyVerb = async () => {
    const verbs: string[] = [
        lessonObjRef.value.verbs[activeItem].base_form.trim().toLowerCase(),
        lessonObjRef.value.verbs[activeItem].past_simple.trim().toLowerCase(),
        lessonObjRef.value.verbs[activeItem].past_participle.trim().toLowerCase(),
    ];
    const writen: string[] = [
        lessonObjRef.value.write_base_form.toLocaleLowerCase().trim(),
        lessonObjRef.value.write_past_simple.toLocaleLowerCase().trim(),
        lessonObjRef.value.write_past_participle.toLocaleLowerCase().trim()
    ];

    if (lessonObjRef.value.write) {
        for (let i = 0; i < verbs.length; ++i) {
            if (verbs[i] !== writen[i]) {
                lessonObjRef.value.verbs[activeItem].error = true;
                return;
            }
        }

        lessonObjRef.value.verbs[activeItem].error = false;
        lessonObjRef.value.verbs[activeItem].active = false;

        lessonObjRef.value.write_base_form = '';
        lessonObjRef.value.write_past_simple = '';
        lessonObjRef.value.write_past_participle = '';

        activeItem += 1;

        if (activeItem === WORDS_IN_LESSON) {
            lessonObjRef.value.write = false;
            lessonObjRef.value.check = true;
            activeItem = 0;
        }

        lessonObjRef.value.verbs[activeItem].active = true;
    } else {
        lessonObjRef.value.verbs[activeItem].active = false;
        for (let i = 0; i < verbs.length; ++i) {
            if (verbs[i] !== writen[i]) {
                lessonObjRef.value.verbs[activeItem].error = true;
                errorCount.value += 1;
            }
        }
        if (!lessonObjRef.value.verbs[activeItem].error) {
            lessonObjRef.value.verbs[activeItem].success = true;
            successCount.value += 1;
        }

        lessonObjRef.value.write_base_form = '';
        lessonObjRef.value.write_past_simple = '';
        lessonObjRef.value.write_past_participle = '';

        activeItem += 1;

        if (activeItem === WORDS_IN_LESSON) {
            lessonObjRef.value.completed = true;
            await updateStudentCourseWords();
        } else {
            lessonObjRef.value.verbs[activeItem].active = true;
        }
    }
};

onBeforeMount(async () => {
    await getLessonData();
});
</script>

<template>
    <main>
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
            <RouterLink
                :to="{
                    name: 'course-verbs-read',
                    params: { id: 'irr_verbs' }
                }"
                class="btn btn-green"
                >Read verbs
            </RouterLink>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Base form</th>
                        <th>Past simple</th>
                        <th>Past participle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in lessonObjRef.verbs"
                        :key="item.id"
                        :class="{'font-success': item.success, 'font-error': item.error}"
                    >
                        <td>
                            {{ item.base_form }}
                        </td>
                        <td>
                            {{ item.past_simple }}
                        </td>
                        <td>
                            {{ item.past_participle }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- else -->
        <div v-else class="lesson-item">
            <div v-for="item in lessonObjRef.verbs" :key="item.id">
                <div v-if="item.active">
                    <h3 :class="{'font-error': item.error}">
                        {{ item.tr_ru }}
                    </h3>
                    <br />

                    <form @submit.prevent="applyVerb">
                        <table>
                            <thead>
                                <tr>
                                    <th>Base form</th>
                                    <th>Past simple</th>
                                    <th>Past participle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="lessonObj.write">
                                    <td>{{ item.base_form }}</td>
                                    <td>{{ item.past_simple }}</td>
                                    <td>{{ item.past_participle }}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            class="input-text"
                                            id="write_base_form"
                                            v-model="lessonObjRef.write_base_form"
                                            autocomplete="off"
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="input-text"
                                            id="write_past_simple"
                                            v-model="lessonObjRef.write_past_simple"
                                            autocomplete="off"
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="input-text"
                                            id="write_past_participle"
                                            v-model="lessonObjRef.write_past_participle"
                                            autocomplete="off"
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-green">Apply</button>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

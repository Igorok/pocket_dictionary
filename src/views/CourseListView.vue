<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import type { Course, StudentCourse, StudentCourseDb } from '../dto/course';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { getCourseRepository } from '../repositories/CourseFirebase';
import { getWordsRepository } from '../repositories/WordsLocal';
import { getVerbsRepository } from '../repositories/VerbsLocal';
import { getTensesRepository } from '../repositories/TensesLocal';

type Joined = {
    joined: boolean;
    student_course_id: string;
};
type CourseItem = Course & Joined;

const success = ref({
    message: ''
});
const error = ref({
    message: ''
});

const coursesWordsRefObj: CourseItem[] = [];
const coursesOthersRefObj: CourseItem[] = [];

const coursesWordsRef = ref(coursesWordsRefObj);
const coursesOthersRef = ref(coursesOthersRefObj);

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);
const wordsRepository = getWordsRepository();
const verbsRepository = getVerbsRepository();
const tensesRepository = getTensesRepository();

let retry = 0;
const getCoursesData = async (): Promise<void> => {
    retry += 1;
    if (retry === 5) return;

    try {
        const student = authRepository.getCurrentUser();
        if (!student?.id) return;

        const allCourses: Course[] = courseRepository.getCourses({});
        const joinedCourses: StudentCourse[] =
            await courseRepository.getStudentCourses(student.id);

        const joinedMap = joinedCourses.reduce((acc, course) => {
            acc.set(course.course_id, course);
            return acc;
        }, new Map());

        allCourses.forEach((course) => {
            let joined = false;
            let student_course_id = '';
            if (joinedMap.has(course.id)) {
                joined = true;
                student_course_id = joinedMap.get(course.id).id;
            }

            if (course.type === 'words') {
                coursesWordsRef.value.push({
                    ...course,
                    joined,
                    student_course_id
                });
            } else {
                coursesOthersRef.value.push({
                    ...course,
                    joined,
                    student_course_id
                });
            }
        });
    } catch (e) {
        if (e instanceof Error) {
            error.value.message = e.message;
        }
    }
};

const joinCourse = async (course_id: string | undefined) => {
    if (!course_id) return;

    const student = authRepository.getCurrentUser();
    if (!student?.id) return;

    let course = coursesWordsRef.value.find(({ id }) => id === course_id);
    if (!course?.id) {
        course = coursesOthersRef.value.find(({ id }) => id === course_id);
    }
    if (!course?.id) return;

    const { id, topic, title, type } = course;
    const joined: StudentCourseDb = {
        course_id: id,
        student_id: student.id,
        title,
        topic,
        type,
        updated_at: Date.now(),
        words: []
    };

    if (course.type === 'verbs') {
        for (const item of verbsRepository.getVerbs()) {
            joined.words.push({
                id: item.id,
                e: 0,
                l_at: 0
            });
        }
    } else if (course.type === 'tenses') {
        const descriptions = tensesRepository.getDescriptions({ topic });
        const tenseIds = descriptions.map(({ id }) => id);
        for (const item of tensesRepository.getSentences({ tenseIds })) {
            joined.words.push({
                id: item.id,
                e: 0,
                l_at: 0
            });
        }
    } else {
        for (const item of wordsRepository.getAllWords({ topic })) {
            joined.words.push({
                id: item.id,
                e: 0,
                l_at: 0
            });
        }
    }

    try {
        const newCourse = await courseRepository.joinCourse(joined);
        course.joined = true;
        course.student_course_id = newCourse.id || '';

        success.value.message = 'Course successfully joined!';
    } catch (e) {
        if (e instanceof Error) {
            error.value.message = e.message;
        }
    }
};

let onAuthStateListener: Unsubscribe;
onBeforeMount(async () => {
    await getCoursesData();
    onAuthStateListener = authRepository.auth.onAuthStateChanged(
        async (user) => {
            if (user && !coursesWordsRef.value?.length) {
                await getCoursesData();
            }
        }
    );
});
onBeforeUnmount(() => {
    if (onAuthStateListener) {
        onAuthStateListener();
    }
});
</script>

<template>
    <main>
        <div class="course-list">
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

            <!-- words -->
            <h3>Words:</h3>
            <div class="card-wrapper">
                <div
                    v-for="course in coursesWordsRef"
                    :key="course.id"
                    class="card"
                >
                    {{ course.title }}
                    <br /><br />
                    <RouterLink
                        :to="{
                            name: 'course-words-read',
                            params: { id: course.id }
                        }"
                        class="btn btn-green"
                        >Read these words
                    </RouterLink>
                    <button
                        v-if="!course.joined"
                        v-on:click="joinCourse(course.id)"
                        class="btn btn-green"
                    >
                        Join this course
                    </button>
                    <div v-else>
                        <RouterLink
                            :to="{
                                name: 'course-words-test',
                                params: { id: course.student_course_id }
                            }"
                            class="btn btn-green"
                            >Test these words
                        </RouterLink>
                        <RouterLink
                            :to="{
                                name: 'course-words-write',
                                params: { id: course.student_course_id }
                            }"
                            class="btn btn-green"
                            >Write these words
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- others -->
            <h3>Others:</h3>
            <div class="card-wrapper">
                <div
                    v-for="course in coursesOthersRef"
                    :key="course.id"
                    class="card"
                >
                    {{ course.title }}
                    <br /><br />
                    <RouterLink
                        :to="{
                            name: `course-${course.type}-read`,
                            params: { id: course.id }
                        }"
                        class="btn btn-green"
                        >Read this course
                    </RouterLink>
                    <button
                        v-if="!course.joined"
                        v-on:click="joinCourse(course.id)"
                        class="btn btn-green"
                    >
                        Join this course
                    </button>
                    <div v-else>
                        <RouterLink
                            :to="{
                                name: `course-${course.type}-write`,
                                params: { id: course.student_course_id }
                            }"
                            class="btn btn-green"
                            >Write this course
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

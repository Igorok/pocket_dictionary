<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import type { Course, StudentCourse } from '../dto/course';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { getCourseRepository } from '../repositories/CourseFirebase';

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

const coursesRefObj: CourseItem[] = [];
const coursesRef = ref(coursesRefObj);

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);

let retry = 0;
const getCoursesData = async (): Promise<CourseItem[]> => {
    retry += 1;
    if (retry === 5) return [];

    const courses: CourseItem[] = [];
    try {
        const student = authRepository.getCurrentUser();
        if (!student?.id) return [];

        const allCourses: Course[] = courseRepository.getAllCourses();
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
            courses.push({
                ...course,
                joined,
                student_course_id
            });
        });
    } catch (e) {
        error.value.message = e.message;
    }
    return courses;
};

const joinCourse = async (course_id: string | undefined) => {
    if (!course_id) return;

    const student = authRepository.getCurrentUser();
    if (!student?.id) return;

    const course = coursesRef.value.find(({ id }) => id === course_id);
    if (!course?.id) return;

    const { id, topic, title, type } = course;
    const joined: StudentCourse = {
        course_id: id,
        student_id: student.id,
        title,
        topic,
        type,
        updated_at: Date.now(),
        words: []
    };
    try {
        const newCourse = await courseRepository.joinCourse(joined);
        course.joined = true;
        course.student_course_id = newCourse.id || '';

        success.value.message = 'Course successfully joined!';
    } catch (e) {
        error.value.message = e?.message || 'Something wrong!';
    }
};

let onAuthStateListener: Unsubscribe;
onBeforeMount(async () => {
    coursesRef.value = await getCoursesData();
    onAuthStateListener = authRepository.auth.onAuthStateChanged(
        async (user) => {
            if (user && !coursesRef.value?.length) {
                coursesRef.value = await getCoursesData();
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

            <h3>Words:</h3>
            <div class="card-wrapper">
                <div v-for="course in coursesRef" :key="course.id" class="card">
                    {{ course.title }}
                    <br /><br />
                    <button
                        v-if="!course.joined"
                        v-on:click="joinCourse(course.id)"
                        class="btn btn-green"
                    >
                        Join this course
                    </button>
                    <RouterLink
                        v-else
                        :to="{
                            name: 'course-words-test',
                            params: { id: course.student_course_id }
                        }"
                        class="btn btn-green"
                        >Test these words
                    </RouterLink>
                    <br />
                </div>
            </div>
        </div>
    </main>
</template>

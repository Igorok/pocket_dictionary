<script setup lang="ts">
import type { Course, StudentCourse } from '../dto/course';
import { ref, onMounted } from 'vue';
import { getCourseRepository } from '../repositories/CourseFirebase';
import { getAuthRepository } from '../repositories/StudentFirebase';

type Joined = {
    joined: boolean;
    student_course_id: string;
};
type CourseItem = Course & Joined;

let success = ref({
    message: ''
});
const error = ref({
    message: ''
});

const coursesRefObj: CourseItem[] = [];
const coursesRef = ref(coursesRefObj);

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);

const getCoursesData = async (): Promise<CourseItem[]> => {
    console.log('start getCoursesData');

    const courses: CourseItem[] = [];
    try {
        const student = authRepository.getCurrentUser();
        console.log('student', student);
        if (!student) return [];

        const allCourses: Course[] = await courseRepository.getAllCourses();
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
                student_course_id = joinedMap.get(course.id).course_id;
            }
            courses.push({
                ...course,
                joined,
                student_course_id
            });
        });

        console.log('end getCoursesData', allCourses);
    } catch (e) {
        console.log('getCoursesData', e);
        error.value.message = e.message;
    }
    return courses;
};

const joinCourse = async (course_id: string | undefined) => {
    if (!course_id) return;

    const student = authRepository.getCurrentUser();
    if (!student) return;

    const course = coursesRef.value.find(({ id }) => id === course_id);
    if (!course) return;

    const { id, topic, title, type } = course;
    const joined = {
        course_id: id,
        student_id: student.id,
        title,
        topic,
        type,
        updated_at: Date.now()
    };
    try {
        await courseRepository.joinCourse(joined);
        success.value.message = 'Course successfully joined!';
    } catch (e) {
        console.log('joinCourse', e);
        error.value.message = e.message;
    }
};

onMounted(async () => {
    coursesRef.value = await getCoursesData();
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

            <h3>Words:</h3>
            <div class="card-wrapper">
                <div v-for="course in coursesRef" :key="course.id" class="card">
                    {{ course.title }}
                    <br /><br />
                    <button
                        v-if="!course.joined"
                        v-on:click="joinCourse(course.id)"
                        to="/test-words"
                        class="btn btn-green"
                    >
                        Join this course
                    </button>
                    <RouterLink
                        v-else
                        to="/test-words/course.student_course_id"
                        class="btn btn-green"
                        >Learn</RouterLink
                    >
                    <br />
                </div>
            </div>
        </div>
    </main>
</template>

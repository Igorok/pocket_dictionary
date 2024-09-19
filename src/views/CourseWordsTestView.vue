<script setup lang="ts">
import type { Course, StudentCourse } from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { getCourseRepository } from '../repositories/CourseFirebase';

const courseId: string | string[] = useRoute().params.id;

console.log('courseId', courseId);

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);

const success = ref({
    message: ''
});
const error = ref({
    message: ''
});

let studentCourse: StudentCourse = {
    title: '',
    topic: '',
    type: '',
    updated_at: 0,
    course_id: '',
    student_id: '',
    words: []
};
const studentCourseRef = ref(studentCourse);

let retry = 0;
const getCourseData = async (): Promise<StudentCourse> => {
    retry += 1;
    if (retry === 5) return studentCourse;

    try {
        studentCourse = await courseRepository.getStudentCourseById(
            String(courseId)
        );
    } catch (e) {
        error.value.message = e.message;
    }

    return studentCourse;
};

onBeforeMount(async () => {
    studentCourseRef.value = await getCourseData();
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

            <h3>Test:</h3>
            User {{ $route.params.id }}
        </div>
    </main>
</template>

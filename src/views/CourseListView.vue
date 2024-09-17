<script setup lang="ts">
import type { Course } from '../dto/course';
import { ref, onMounted, onBeforeMount } from 'vue';
import { getCourseRepository } from '../repositories/CourseFirebase';

const error = ref({
    message: ''
});
const courses = ref({
    list: []
});

const repository = getCourseRepository(undefined);

// let courses: Course[] = [];
onBeforeMount(async () => {
    try {
        courses.value.list = await repository.getAllCourses();
        console.log('courses.value.list', courses.value.list);
    } catch(e) {
        console.log('e', e);
        error.value.message = e.message;
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

            <h3>Words:</h3>
            <div class="card-wrapper">
                <div v-for="course in courses.list" :key="course.id" class="card">
                    {{ course.title }}
                    <br />
                    <RouterLink to="/test-words">Test words</RouterLink>
                </div>
            </div>

        </div>
    </main>
</template>

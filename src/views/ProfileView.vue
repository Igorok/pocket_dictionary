<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import type { Course } from '../dto/course';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { getCourseRepository } from '../repositories/CourseFirebase';

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);

const error = ref({
    message: ''
});
const statsRef = ref([]);
const userRef = ref({});

let retry = 0;
const getProfileData = async (): Promise<void> => {
    retry += 1;
    if (retry === 5) return;

    try {
        const student = authRepository.getCurrentUser();
        if (!student?.id) return;

        userRef.value = student;

        const allCourses: Course[] = courseRepository.getAllCourses();
        const courseByTopic = allCourses.reduce((acc, val) => {
            console.log('val', val);
            acc.set(val.topic, val);
            return acc;
        }, new Map());
        const stats = await courseRepository.getStudentStats(student.id);

        console.log('stats', stats);

        Object.entries(stats.byDay).forEach(([dt, courseStast]) => {
            console.log(dt, courseStast);

            const info = {
                date: dt,
                error: 0,
                success: 0,
                total: 0,
                progress: []
            };
            Object.entries(courseStast).forEach(([topic, { e, s }]) => {
                console.log(topic, { e, s });

                const course = courseByTopic.get(topic);
                info.error += e;
                info.success += s;
                info.total += e + s;
                info.progress.push({
                    topic: course.topic,
                    title: course.title,
                    error: e,
                    success: s,
                    total: e + s
                });
            });
            statsRef.value.push(info);
        });
    } catch (e) {
        console.log('e', e);
        error.value.message = e.message;
    }
};

let onAuthStateListener: Unsubscribe;
onBeforeMount(async () => {
    await getProfileData();
    onAuthStateListener = authRepository.auth.onAuthStateChanged(
        async (user) => {
            if (user && !userRef.value.id) {
                await getProfileData();
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
        <div v-if="Boolean(error.message)">
            <div class="card item-error">
                <p>{{ error.message }}</p>
            </div>
        </div>
        <h3>{{ userRef.email }}</h3>

        <div class="stats-wraper">
            <div class="stats-row" v-for="stats in statsRef" :key="stats.date">
                <div class="stats-item">
                    <p class="font-warning">Date: {{ stats.date }}</p>
                    <p class="font-success">Total: {{ stats.total }}</p>
                    <p>Success: {{ stats.success }}</p>
                    <p>Errors: {{ stats.error }}</p>
                </div>
                <div
                    class="stats-item"
                    v-for="progress in stats.progress"
                    :key="stats.topic"
                >
                    <p class="font-warning">{{ progress.title }}</p>
                    <p class="font-success">Total: {{ progress.total }}</p>
                    <p>Success: {{ progress.success }}</p>
                    <p>Errors: {{ progress.error }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

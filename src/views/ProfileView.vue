<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import type { Course } from '../dto/course';
import type { StudentProgressData, Student } from '../dto/student';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { getCourseRepository } from '../repositories/CourseFirebase';

const authRepository = getAuthRepository(undefined);
const courseRepository = getCourseRepository(undefined);

const error = ref({
    message: ''
});
const statsData: StudentProgressData[] = [];
const stundetData: Student = {
    id: '',
    email: ''
};
const statsRef = ref(statsData);
const userRef = ref(stundetData);

let retry = 0;
const getProfileData = async (): Promise<void> => {
    retry += 1;
    if (retry === 5) return;

    try {
        const student = authRepository.getCurrentUser();
        if (!student?.id) return;

        userRef.value = student;

        const allCourses: Course[] = courseRepository.getCourses({});
        const courseById = allCourses.reduce((acc, val) => {
            acc.set(val.id, val);
            return acc;
        }, new Map());
        const stats = await courseRepository.getStudentStats(student.id);

        const userStats: StudentProgressData[] = stats.days.map(({ day, stats }) => {
            const info: StudentProgressData = {
                date: day,
                error: 0,
                success: 0,
                total: 0,
                progress: []
            };

            stats.forEach(({ e, s, id }) => {
                const course = courseById.get(id);
                if (!course) {
                    console.log('courseId', id);
                }

                info.error += e;
                info.success += s;
                info.total += e + s;
                info.progress.push({
                    courseId: course.courseId,
                    title: course.title,
                    error: e,
                    success: s,
                    total: e + s
                });
            });

            return info;
        });

        statsRef.value = userStats;
    } catch (e) {
        if (e instanceof Error) {
            error.value.message = e.message;
        }
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

        <div class="stats-wrapper">
            <div v-for="stats in statsRef" :key="stats.date">
                <p>
                    <span class="font-info">
                        Date: {{ stats.date }} &nbsp; Total: {{ stats.total }}
                    </span>
                    &nbsp;
                    <span class="font-success"
                        >Success: {{ stats.success }}</span
                    >
                    &nbsp;
                    <span class="font-error">Errors: {{ stats.error }}</span>
                </p>
                <!-- body -->
                <div class="flex-row">
                    <div
                        class="flex-item"
                        v-for="progress in stats.progress"
                        :key="progress.courseId"
                    >
                        <p>{{ progress.title }}</p>
                        <p>Total: {{ progress.total }}</p>
                        <p>Success: {{ progress.success }}</p>
                        <p>Errors: {{ progress.error }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

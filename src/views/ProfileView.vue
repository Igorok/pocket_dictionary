<script setup lang="ts">
    import { ref, onBeforeMount } from 'vue';
    import { useAuthStore } from '../stores/auth';
    import type { Course } from '../dto/course';
    import type { StudentProgressData } from '../dto/student';
    import { getCourseRepository } from '../dao/CourseFirebase';
    import LanguageView from '../components/language/selector.vue';
    import { useLanguageStore } from '../stores/language';

    const authStore = useAuthStore();
    const langStore = useLanguageStore();
    const courseRepository = getCourseRepository(undefined);

    const error = ref({
        message: ''
    });
    const statsData: StudentProgressData[] = [];
    const statsRef = ref(statsData);
    const userRef = ref(authStore.student);

    const getProfileData = async () => {
        try {
            const allCourses: Course[] = courseRepository.getCourses({ language: langStore.language?.code });
            const courseById = allCourses.reduce((acc, val) => {
                acc.set(val.id, val);
                return acc;
            }, new Map());
            const stats = await courseRepository.getStudentStats(userRef.value.id);

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

    onBeforeMount(async () => {
        getProfileData();
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
        <p>
            <LanguageView />
        </p>

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
                        <p class="font-info">{{ progress.title }}</p>
                        <p>Total: {{ progress.total }}</p>
                        <p>Success: {{ progress.success }}</p>
                        <p>Errors: {{ progress.error }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

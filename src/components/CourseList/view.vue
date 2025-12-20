<script setup lang="ts">
    import type { CourseItem } from './types';
    import type { Alert } from '@/common/dto/alert';
    import { ref, watch, onBeforeMount } from 'vue';
    import { useAuthStore } from '../../stores/auth';
    import { useAlertsStore } from '../../stores/alerts';
    import { storeToRefs } from 'pinia';
    import { useLanguageStore } from '@/stores/language';
    import LanguageSelectView from '../../components/language/selector.vue';
    import { getDataAction, joinCourseAction } from './controller';

    const authStore = useAuthStore();
    const langStore = useLanguageStore();
    const alertsStore = useAlertsStore();
    const { language } = storeToRefs(langStore);

    watch(language, () => {
        getCoursesData();
    });

    const coursesWordsRefObj: CourseItem[] = [];
    const coursesOthersRefObj: CourseItem[] = [];
    const coursesWordsRef = ref(coursesWordsRefObj);
    const coursesOthersRef = ref(coursesOthersRefObj);

    const getCoursesData = async (): Promise<void> => {
        try {
            const student = authStore.student;
            if (!student?.id) return;

            coursesWordsRef.value = [];
            coursesOthersRef.value = [];

            const data = await getDataAction(student.id, language.value.code);

            coursesWordsRef.value = data.words;
            coursesOthersRef.value = data.sentences;
        } catch (e) {
            if (e instanceof Error) {
                const alert: Alert = {
                    id: `get_course_${Date.now()}`,
                    type: 'error',
                    message: e.message,
                };
                alertsStore.notify(alert);
            }
        }
    };

    const joinCourse = async (courseId: string | undefined) => {
        if (!courseId) return;

        const student = authStore.student;
        if (!student?.id) return;

        let course = coursesWordsRef.value.find(({ id }) => id === courseId);
        if (!course?.id) {
            course = coursesOthersRef.value.find(({ id }) => id === courseId);
        }
        if (!course?.id) return;

        try {
            const joinedCourse = await joinCourseAction(student.id, courseId);
            course.joined = true;
            course.student_course_id = joinedCourse?.id ?? '';

            const alert: Alert = {
                id: `joined_${Date.now()}`,
                type: 'success',
                message: 'Course successfully joined!',
            };
            alertsStore.notify(alert);
        } catch (e) {
            if (e instanceof Error) {
                const alert: Alert = {
                    id: `joined_${Date.now()}`,
                    type: 'error',
                    message: e.message,
                };
                alertsStore.notify(alert);
            }
        }
    };

    onBeforeMount(async () => {
        getCoursesData();
    });

</script>

<template>
    <main>
        <div class="course-list">
            <p>
                <LanguageSelectView />
            </p>

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

<script setup lang="ts">
import type { CourseDescription } from '@/common/dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { sentencesDao } from '../common/dao/SentencesLocal';
import { getCourseDao } from '../common/dao/CourseFirebase';
import { useLanguageStore } from '@/stores/language';

const courseId: string | string[] = useRoute().params.id;

const langStore = useLanguageStore();
const courseRepository = getCourseDao();

const description: CourseDescription = {
    id: '',
    topic: '',
    title: '',
    descriptions: [],
};
const descriptionRef = ref(description);

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    const { topic } = course;
    const desc = sentencesDao.getDescriptionByTopic({ topic, language: langStore.language.code });
    if (desc) {
        descriptionRef.value = desc;
    }
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{ descriptionRef.title }}:</h3>

        <div v-for="example in descriptionRef.descriptions">
            <p>{{ example }}</p>
        </div>
        <br />
    </main>
</template>

<script setup lang="ts">
import type { SentenceDescription } from '@/common/dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { sentencesDao } from '../common/dao/SentencesLocal';
import { getCourseDao } from '../common/dao/CourseFirebase';
import { useLanguageStore } from '@/stores/language';

const courseId: string | string[] = useRoute().params.id;

const langStore = useLanguageStore();
const courseRepository = getCourseDao();

const descriptions: SentenceDescription[] = [];
const descriptionsRef = ref(descriptions);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    const { topic } = course;
    titleRef.value = course?.title;
    descriptionsRef.value = sentencesDao.getDescriptions({ topic, language: langStore.language.code });
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{ titleRef }}:</h3>

        <div v-for="item in descriptionsRef" :key="item.id">
            <h4>{{ item.title }}</h4>
            <div v-for="example in item.description">
                <p>{{ example }}</p>
            </div>
            <br />
        </div>
    </main>
</template>

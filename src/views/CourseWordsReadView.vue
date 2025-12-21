<script setup lang="ts">
import type { Word } from '../common/dto/course';
import { chunk } from 'lodash';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { wordsDao } from '../common/dao/WordsLocal';
import { getCourseDao } from '../common/dao/CourseFirebase';
import { useLanguageStore } from '../stores/language';

const courseId: string | string[] = useRoute().params.id;

const courseRepository = getCourseDao();
const langStore = useLanguageStore();

const words: Word[][] = [];
const wordsRef = ref(words);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    titleRef.value = course?.title;

    let arr: Word[] = wordsDao.getAllWords({ topic: course.topic, language: langStore.language?.code });
    arr = arr.sort((a, b) => (a.word < b.word ? -1 : 1));
    const chunkSize = Math.ceil(arr.length / 3);
    wordsRef.value = chunk(arr, chunkSize);
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{ titleRef }}:</h3>
        <div class="vocabulary-wrapper">
            <div class="vocabulary-container" v-for="chunk in wordsRef">
                <p v-for="item in chunk" :key="item.id">
                    {{ item.word }}: {{ item.tr_ru }}
                </p>
            </div>
        </div>
    </main>
</template>

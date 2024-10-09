<script setup lang="ts">
import type { Word } from '../dto/course';
import { chunk } from 'lodash';
import { ref, onBeforeMount } from 'vue';
import { getWordsRepository } from '../repositories/WordsLocal';

const wordsRepository = getWordsRepository();

const words: Word[][] = [];
const wordsRef = ref(words);

const getWordsData = () => {
    let arr: Word[] = wordsRepository.getAllWords({});
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
        <h3 class="font-success">Vocabulary:</h3>
        <div class="vocabulary-wrapper">
            <div class="vocabulary-container" v-for="chunk in wordsRef">
                <p v-for="item in chunk" :key="item.id">
                    {{ item.word }}: {{ item.tr_ru }}, {{ item.topics.join() }}
                </p>
            </div>
        </div>
    </main>
</template>

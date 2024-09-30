<script setup lang="ts">
import type { IrregularVerb } from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getWordsRepository } from '../repositories/WordsLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const courseId: string | string[] = useRoute().params.id;

const wordsRepository = getWordsRepository();
const courseRepository = getCourseRepository();

const verbs: IrregularVerb[] = [];
const verbsRef = ref(verbs);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    titleRef.value = course?.title;
    verbsRef.value = wordsRepository.getVerbs();
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{titleRef}}:</h3>

        <table>
            <thead>
                <tr>
                    <th>Base form</th>
                    <th>Past simple</th>
                    <th>Past participle</th>
                    <th>Translate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in verbsRef" :key="item.id">
                    <td>{{ item.base_form }}</td>
                    <td>{{ item.past_simple }}</td>
                    <td>{{ item.past_participle }}</td>
                    <td>{{ item.tr_ru }}</td>
                </tr>
            </tbody>
        </table>

    </main>
</template>

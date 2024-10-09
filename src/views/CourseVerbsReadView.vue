<script setup lang="ts">
import type { IrregularVerb } from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getVerbsRepository } from '../repositories/VerbsLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const courseId: string | string[] = useRoute().params.id;

const verbsRepository = getVerbsRepository();
const courseRepository = getCourseRepository();

const verbs: IrregularVerb[] = [];
const verbsRef = ref(verbs);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    titleRef.value = course?.title;
    verbsRef.value = verbsRepository.getVerbs();
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{ titleRef }}:</h3>

        <div class="verbs-wrapper">
            <div class="flex-row">
                <p class="flex-item">Base form</p>
                <p class="flex-item">Past simple</p>
                <p class="flex-item">Past participle</p>
                <p class="flex-item">Translate</p>
            </div>

            <div class="flex-row" v-for="item in verbsRef" :key="item.id">
                <p class="flex-item">{{ item.base_form }}</p>
                <p class="flex-item">{{ item.past_simple }}</p>
                <p class="flex-item">{{ item.past_participle }}</p>
                <p class="flex-item">{{ item.tr_ru }}</p>
            </div>
        </div>
    </main>
</template>

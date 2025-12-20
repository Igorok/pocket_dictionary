<script setup lang="ts">
import type { TenseDescription } from '../common/dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getTensesRepository } from '../common/dao/SentencesLocal';
import { getCourseDao } from '../common/dao/CourseFirebase';

const courseId: string | string[] = useRoute().params.id;

const tensesRepository = getTensesRepository();
const courseRepository = getCourseDao();

const descriptions: TenseDescription[] = [];
const descriptionsRef = ref(descriptions);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    const { topic } = course;
    titleRef.value = course?.title;
    descriptionsRef.value = tensesRepository.getDescriptions({ topic });
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

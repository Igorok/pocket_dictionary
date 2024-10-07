<script setup lang="ts">
import type { TenseDescription } from '../dto/course';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getTensesRepository } from '../repositories/TensesLocal';
import { getCourseRepository } from '../repositories/CourseFirebase';

const courseId: string | string[] = useRoute().params.id;

const tensesRepository = getTensesRepository();
const courseRepository = getCourseRepository();

const descriptions: TenseDescription[] = [];
const descriptionsRef = ref(descriptions);
const titleRef = ref('');

const getWordsData = () => {
    const course = courseRepository.getCourseById(String(courseId));
    if (!course) return;

    titleRef.value = course?.title;
    descriptionsRef.value = tensesRepository.getDescriptions();
};
onBeforeMount(async () => {
    getWordsData();
});
</script>

<template>
    <main>
        <h3 class="font-success">{{titleRef}}:</h3>

        <div v-for="item in descriptionsRef" :key="item.id">
            <h4>{{item.title}}</h4>
            <div v-for="example in item.description">
                <p>{{example}}</p>
            </div>
            <br />
        </div>

    </main>
</template>

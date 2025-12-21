<script setup lang="ts">
    import { toRef } from 'vue';
    const props = defineProps(['lessonDataRef']);
    const lessonDataRef = toRef(props, 'lessonDataRef');
</script>

<template>
    <main>
        <h3>Lesson is completed</h3>
        <RouterLink
            :to="{
                name: 'course-words-read',
                params: { id: lessonDataRef.courseId }
            }"
            class="btn btn-green"
            >Read words
        </RouterLink>
        &nbsp;
        <RouterLink
            :to="{
                name: 'course-words-write',
                params: { id: lessonDataRef.courseId }
            }"
            class="btn btn-green"
            >Write words
        </RouterLink>
        <br />
        <br />
        <div v-for="item in lessonDataRef.words" :key="item.word.word">
            <p
                :class="{
                    'font-success': item.success,
                    'font-error': !item.success
                }"
            >
                {{ item.word.word }} - {{ item.word.tr_ru }}
            </p>
        </div>
    </main>
</template>

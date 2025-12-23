<script setup lang="ts">
import type { StudentWord } from '@/common/dto/course';
import type {
    TestWordsItemOption,
    TestWordsItem,
    TestWordsLesson
} from './types';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { useAlertsStore } from '@/stores/alerts';
import type { Alert } from '@/common/dto/alert';
import CompletedList from './CompletedList.vue';
import TestItem from './TestItem.vue';

import { getLessonDataAction, updateStudentCourseAction } from './controller';

const CHANGE_TIMEOUT = 1000;

const courseId: string = useRoute().params.id as string;

const langStore = useLanguageStore();
const alertsStore = useAlertsStore();

const successCount = ref(0);
const errorCount = ref(0);

const lessonWords: StudentWord[] = [];
let lessonData: TestWordsLesson = {
    courseId: '',
    studentCourseId: '',
    title: '',
    words: [],
    completed: false
};
const lessonDataRef = ref(lessonData);

const activeItem: TestWordsItem = {
    word: { id: '', word: '', tr_ru: '', topics: [], updated_at: 0 },
    options: [],
    success: undefined
};
const activeItemRef = ref(activeItem);
let activeId: number = 0;

const getLessonData = async (): Promise<void> => {
    try {
        lessonDataRef.value = await getLessonDataAction(
            courseId,
            langStore.language.code
        );
        activeItemRef.value = lessonDataRef.value.words[activeId];
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `get_course_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }
};

const updateStudentCourseWords = async () => {
    try {
        await updateStudentCourseAction({
            studentCourseId: courseId,
            lessonWords,
            successCount: successCount.value,
            errorCount: errorCount.value
        });
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `get_course_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }
};

let isSelectionBlocked = false;
const selectCard = (option: TestWordsItemOption) => {
    if (isSelectionBlocked) {
        return;
    }
    isSelectionBlocked = true;

    if (option.word === lessonDataRef.value.words[activeId].word.word) {
        option.success = true;
        lessonDataRef.value.words[activeId].success = true;
        successCount.value += 1;

        lessonWords.push({ id: option.id, l_at: 0, e: 0 });
    } else {
        option.error = true;
        errorCount.value += 1;
        lessonWords.push({ id: option.id, l_at: 0, e: 1 });
    }

    setTimeout(() => {
        activeId += 1;
        if (activeId === lessonDataRef.value.words.length) {
            lessonDataRef.value.completed = true;
            return updateStudentCourseWords();
        }

        activeItemRef.value = lessonDataRef.value.words[activeId];
        isSelectionBlocked = false;
    }, CHANGE_TIMEOUT);
};

onBeforeMount(async () => {
    await getLessonData();
});
</script>

<template>
    <main>
        <div class="dictionary">
            <h3>Test: {{ lessonDataRef.title }}</h3>
            <p>
                <b class="font-success">Success: {{ successCount }}</b>
                <span>&nbsp;</span>
                <b class="font-error">Error: {{ errorCount }}</b>
            </p>

            <div v-if="lessonDataRef.completed">
                <CompletedList :lessonDataRef="lessonDataRef" />
            </div>
            <div v-else class="lesson-item">
                <TestItem
                    :activeItemRef="activeItemRef"
                    @selectCard="selectCard"
                />
            </div>
        </div>
    </main>
</template>

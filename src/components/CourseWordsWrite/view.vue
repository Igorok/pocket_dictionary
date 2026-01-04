<script setup lang="ts">
import type { LessonWriteWord, LessonWriteData, RepeatItem } from './types';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { useAlertsStore } from '@/stores/alerts';

import { getLessonDataAction, updateStudentCourseAction } from './controller';
import type { Alert } from '@/common/dto/alert';

const courseStudentId: string = useRoute().params.id as string;

const langStore = useLanguageStore();
const alertsStore = useAlertsStore();

const langCharsRef = ref(langStore.language.chars.join(', '));
const successCount = ref(0);
const errorCount = ref(0);
const titleRef = ref('');

const activeWord: LessonWriteWord = {
    id: '',
    word: '',
    tr_ru: '',
    error: false,
    success: false
};
const activeWordRef = ref(activeWord);
const activeValueRef = ref('');
const repeatItems: RepeatItem[] = [];
const repeatItemsRef = ref(repeatItems);

const lessonWriteData: LessonWriteData = {
    title: '',
    studentId: '',
    courseId: '',
    courseStudentId: '',

    step: 0,
    countRepeat: 0,
    countWords: 0,

    words: []
};
const lessonWriteDataRef = ref(lessonWriteData);

let activeId: number = 0;

const getLessonData = async () => {
    try {
        lessonWriteDataRef.value = await getLessonDataAction(courseStudentId, langStore.language.code);
        activeWordRef.value = lessonWriteDataRef.value.words[activeId];
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
        updateStudentCourseAction({
            courseStudentId,
            lessonWords: lessonWriteDataRef.value.words,
            successCount: successCount.value,
            errorCount: errorCount.value
        });
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `write_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }
};

const processRepeatWords = () => {
    if (activeValueRef.value.trim() !== activeWordRef.value.word.trim()) {
        activeWordRef.value.error = true;
        return;
    }

    activeWordRef.value.error = false;

    repeatItemsRef.value.push({
        id: Date.now().toString(),
        word: activeValueRef.value,
    });

    activeValueRef.value = '';

    if (repeatItemsRef.value.length < lessonWriteDataRef.value.countRepeat) {
        return;
    }

    activeId += 1;
    repeatItemsRef.value = [];

    if (activeId === lessonWriteDataRef.value.countWords) {
        lessonWriteDataRef.value.step += 1;
        activeId = 0;
    }

    activeWordRef.value = lessonWriteDataRef.value.words[activeId];
};

const processTestWords = async () => {
    if (activeValueRef.value.trim() !== activeWordRef.value.word.trim()) {
        lessonWriteDataRef.value.words[activeId].error = true;
        errorCount.value += 1;
    } else {
        successCount.value += 1;
        lessonWriteDataRef.value.words[activeId].success = true;
    }

    activeValueRef.value = '';
    activeId += 1;
    activeWordRef.value = lessonWriteDataRef.value.words[activeId];

    if (activeId === lessonWriteDataRef.value.words.length) {
        lessonWriteDataRef.value.step += 1;
        return updateStudentCourseWords();
    }
};

const checkItem = async () => {
    try {
        if (lessonWriteDataRef.value.step === 0) {
            processRepeatWords();
        } else {
            await processTestWords();
        }
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `write_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }

};

onBeforeMount(async () => {
    getLessonData();
});
</script>

<template>
    <main>
        <div>
            <h3>Write {{ titleRef }}</h3>
            <p>
                <b class="font-success">Success: {{ successCount }}</b>
                <span>&nbsp;</span>
                <b class="font-error">Error: {{ errorCount }}</b>
            </p>

            <div v-if="lessonWriteDataRef.step < 2" class="lesson-item">
                <h3>{{ activeWordRef.tr_ru }}</h3>
                <p v-if="lessonWriteDataRef.step === 0">{{ activeWordRef.word }}</p>
                <br />

                <form @submit.prevent="checkItem" class="words-write-form">
                    <input
                        type="text"
                        class="input-text"
                        :class="{
                            'input-error': activeWordRef.error,
                        }"
                        v-model="activeValueRef"
                        autocomplete="off"
                        required
                    />
                    <button class="btn">Click!</button>
                </form>

                <p v-for="item in repeatItemsRef" :key="item.id">
                    {{ item.word }}
                </p>

                <p>{{langCharsRef}}</p>
            </div>

            <div v-else>
                <h3>Lesson is completed</h3>

                <div
                    v-for="item in lessonWriteDataRef.words"
                    :key="item.id"
                >
                    <p
                        :class="{
                            'font-success': item.success,
                            'font-error': item.error
                        }"
                    >
                        {{ item.word }} - {{ item.tr_ru }}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

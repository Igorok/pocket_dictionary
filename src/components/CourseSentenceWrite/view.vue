<script setup lang="ts">
import type { LessonWriteSenteceData, LessonWriteSentece } from './types';
import type { Alert } from '@/common/dto/alert';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { useAlertsStore } from '@/stores/alerts';

import { getLessonDataAction, updateStudentCourseAction } from './controller';

const courseStudentId: string = useRoute().params.id as string;

const langStore = useLanguageStore();
const alertsStore = useAlertsStore();

const successCount = ref(0);
const errorCount = ref(0);

const lessonWriteData: LessonWriteSenteceData = {
    title: '',
    sentences: [],
    step: 0,
};

const activeSentence: LessonWriteSentece = {
    id: '',
    sentence: '',
    tr_ru: '',
    hint: '',

    error: false,
    success: false,

    userInput: '',
};

const lessonWriteDataRef = ref(lessonWriteData);
const activeSentenceRef = ref(activeSentence);
let activeId: number = 0;

const getLessonData = async (): Promise<void> => {
    try {
        lessonWriteDataRef.value = await getLessonDataAction(courseStudentId, langStore.language.code);
        activeSentenceRef.value = lessonWriteDataRef.value.sentences[activeId];
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `sentence_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }
};

const formatSentence = (sentence: string) => {
    return sentence
        .replace(/\,*\.*/g, '')
        .trim()
        .toLowerCase();
};

const writeSentence = () => {
    const sentence: string = formatSentence(lessonWriteDataRef.value.sentences[activeId].sentence);
    const userInput: string = formatSentence(activeSentenceRef.value.userInput);

    if (sentence !== userInput) {
        activeSentenceRef.value.error = true;
        return;
    }

    activeSentenceRef.value.userInput = '';
    activeSentenceRef.value.error = false;

    activeId += 1;

    if (activeId === lessonWriteDataRef.value.sentences.length) {
        activeId = 0;
        lessonWriteDataRef.value.step = 1;
    }

    activeSentenceRef.value = lessonWriteDataRef.value.sentences[activeId];
};

const testSentence = async () => {
    const sentence: string = formatSentence(lessonWriteDataRef.value.sentences[activeId].sentence);
    const userInput: string = formatSentence(activeSentenceRef.value.userInput);

    lessonWriteDataRef.value.sentences[activeId].userInput = activeSentenceRef.value.userInput;

    if (sentence !== userInput) {
        lessonWriteDataRef.value.sentences[activeId].error = true;
        errorCount.value += 1;
    } else {
        lessonWriteDataRef.value.sentences[activeId].success = true;
        successCount.value += 1;
    }

    activeId += 1;

    if (activeId === lessonWriteDataRef.value.sentences.length) {
        activeId = 0;
        lessonWriteDataRef.value.step = 2;
        return updateStudentCourseAction({
            courseStudentId,
            lessonSentences: lessonWriteDataRef.value.sentences,
            successCount: successCount.value,
            errorCount: errorCount.value,
        });
    }

    activeSentenceRef.value = lessonWriteDataRef.value.sentences[activeId];
    activeSentenceRef.value.userInput = ''
};

const submitSentence = async () => {
    try {
        if (lessonWriteDataRef.value.step === 0) {
            writeSentence();
        } else {
            await testSentence();
        }
    } catch (e) {
        if (e instanceof Error) {
            const alert: Alert = {
                id: `sentence_${Date.now()}`,
                type: 'error',
                message: e.message
            };
            alertsStore.notify(alert);
        }
    }

};


onBeforeMount(async () => {
    await getLessonData();
});
</script>

<template>
    <main>
        <div class="tenses-write-wrapper">

            <h3>Write {{ lessonWriteDataRef.title }}</h3>
            <p>
                <b class="font-success">Success: {{ successCount }}</b>
                <span>&nbsp;</span>
                <b class="font-error">Error: {{ errorCount }}</b>
            </p>

            <!-- if -->
            <div v-if="lessonWriteDataRef.step < 2">
                <h4 :class="{ 'font-error': Boolean(activeSentenceRef.error) }">
                    {{ activeSentenceRef.tr_ru }} {{ activeSentenceRef.hint }}
                </h4>
                <p v-if="lessonWriteDataRef.step === 0">{{ activeSentenceRef.sentence }}</p>
                <br />

                <form @submit.prevent="submitSentence">
                    <div>
                        <textarea
                            type="text"
                            class="input-text"
                            :class="{
                                'input-error': activeSentenceRef.error,
                            }"
                            id="write_sentence"
                            v-model="activeSentenceRef.userInput"
                            autocomplete="off"
                            required
                        />
                    </div>

                    <br />
                    <button class="btn btn-green">Click!</button>
                    <br />
                </form>
            </div>

            <!-- else -->
            <div v-else class="lesson-item">
                <h3>Lesson is completed</h3>
                <br />
                <div
                    v-for="item in lessonWriteDataRef.sentences"
                    :key="item.id"
                    :class="{
                        'font-success': item.success,
                        'font-error': Boolean(item.error)
                    }"
                >
                    <p>{{ item.tr_ru }} {{ item.hint ?? '' }}</p>
                    <p>{{ item.sentence }}</p>
                    <p v-if="Boolean(item.error)">Wrong: {{ item.userInput }}</p>
                    <br />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Course, StudentCourse } from '@/common/dto/course';
import type { LessonWriteSenteceData, LessonWriteSentece } from './types';
import type { Alert } from '@/common/dto/alert';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { useAlertsStore } from '@/stores/alerts';

import { getLessonDataAction, updateStudentCourseAction } from './controller';

const WORDS_IN_LESSON = 3;

const courseStudentId: string = useRoute().params.id as string;

const langStore = useLanguageStore();
const alertsStore = useAlertsStore();

const successCount = ref(0);
const errorCount = ref(0);
const userInputRef = ref('');

const lessonWriteData: LessonWriteSenteceData = {
    title: '',
    sentences: [],
    step: 0,
};
const activeSentence: LessonWriteSentece = {
    id: '',
    subTopicId: '',
    subTopicTitle: '',
    sentence: '',
    tr_ru: '',
    error: false,
    success: false,
    userInput: '',
};

const lessonWriteDataRef = ref(lessonWriteData);
const activeSentenceRef = ref(activeSentence);
let activeId = 0;

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

const applySentence = async () => {
    const sentence: string = lessonWriteDataRef.value.sentences[activeId].sentence
        .replace(/\,*\.*/g, '')
        .trim()
        .toLowerCase();
    const userInput: string = userInputRef.value
        .replace(/\,*\.*/g, '')
        .trim()
        .toLocaleLowerCase();

    if (sentence !== userInput) {
        lessonWriteDataRef.value.sentences[activeId].error =
            lessonWriteDataRef.value.write_sentence;
        if (lessonWriteDataRef.value.check) {
            errorCount.value += 1;
        } else {
            return;
        }
    } else {
        lessonWriteDataRef.value.sentences[activeId].success = true;
        if (lessonWriteDataRef.value.check) {
            successCount.value += 1;
        } else {
            lessonWriteDataRef.value.sentences[activeId].error = '';
        }
    }

    lessonWriteDataRef.value.sentences[activeId].active = false;
    lessonWriteDataRef.value.write_sentence = '';

    activeItem += 1;

    if (activeId === WORDS_IN_LESSON) {
        if (lessonWriteDataRef.value.check) {
            lessonWriteDataRef.value.completed = true;
            return await updateStudentCourseWords();
        }
        activeId = 0;
        lessonWriteDataRef.value.check = true;
    }

    lessonWriteDataRef.value.sentences[activeId].active = true;
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
                <h4 :class="{ 'font-error': Boolean(activeSentence.error) }">
                    {{ activeSentence.tr_ru }} ({{ activeSentence.subTopicTitle }})
                </h4>
                <p v-if="lessonWriteDataRef.step === 0">{{ activeSentence.sentence }}</p>
                <br />

                <form @submit.prevent="applySentence">
                    <div>
                        <textarea
                            type="text"
                            class="input-text"
                            :class="{
                                'input-error': activeSentence.error,
                            }"
                            id="write_sentence"
                            v-model="activeSentence.userInput"
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
                <p>
                    <RouterLink
                        :to="{
                            name: 'course-tenses-read',
                            params: { id: lessonWriteDataRef.course_id }
                        }"
                        class="btn btn-green"
                        >Read this course
                    </RouterLink>
                </p>
                <br />
                <div
                    v-for="item in lessonWriteDataRef.sentences"
                    :key="item.id"
                    :class="{
                        'font-success': item.success,
                        'font-error': Boolean(item.error)
                    }"
                >
                    <p>{{ item.tr_ru }} ({{ item.subTopicTitle }})</p>
                    <p>{{ item.sentence }}</p>
                    <p v-if="Boolean(item.error)">Wrong: {{ item.error }}</p>
                    <br />
                </div>
            </div>
        </div>
    </main>
</template>

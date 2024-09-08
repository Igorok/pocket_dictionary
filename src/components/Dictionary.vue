<script setup lang="ts">
import { ref } from "vue";
import {
  getNotRepeated,
  setRepeated,
} from "../repositories/dictionary";
import type { Word, LessonOption, LessonItem, CourseItem } from "../dto/dictionary";

const LIMIT = 10;
const CARDS_COUNT = 4;
const TIMEOUT = 1 * 1000;

let words = getNotRepeated({ topic: "all", limit: LIMIT * CARDS_COUNT });

console.log(words);

const repeatedIds: CourseItem[] = [];
const lesson: LessonItem[] = [];

let i = 0;
let j = LIMIT;
while (i < LIMIT) {
  const options: LessonOption[] = [
    {
      ...words[i],
      success: false,
      error: false,
    },
  ];
  ++i;
  for (let k = 0; k < CARDS_COUNT - 1; ++k) {
    options.push({
      ...words[j],
      success: false,
      error: false,
    });
    ++j;
  }

  const word: Word = options[Math.floor(Math.random() * CARDS_COUNT)];

  lesson.push({
    word,
    options,
    completed: false,
    success: false,
  });
}

let lessonCompleted = false;
let idx = 0;
const activeItem = ref(lesson[idx]);

let successCount = 0;
let errorCount = 0;
const selectCard = (selected: { id: number }) => {
  if (activeItem.value.completed) {
    return;
  }

  activeItem.value.completed = true;
  console.log("option", selected);

  activeItem.value.options.forEach((option) => {
    if (option.id === activeItem.value.word.id) {
      option.success = true;
    } else if (option.id === selected.id) {
      option.error = true;
    }
  });

  if (selected.id == activeItem.value.word.id) {
    successCount++;
    activeItem.value.success = true;
  } else {
    errorCount++;
  }

  repeatedIds.push({
      id: activeItem.value.word.id,
      t: Date.now(),
      e: selected.id == activeItem.value.word.id ? 1 : 0,
    });

  if (idx < LIMIT - 1) {
    setTimeout(() => {
      activeItem.value = lesson[++idx];
    }, TIMEOUT);
  } else {
    setRepeated({ topic: "all", ids: repeatedIds });
    lessonCompleted = true;
  }
};
</script>

<template>
  <div class="dictionary">
    <h1>Dictionary</h1>
    <p>
      <b class="font-success">Success: {{ successCount }}</b>
      <span>&nbsp;</span>
      <b class="font-error">Error: {{ errorCount }}</b>
    </p>

    <div v-if="lessonCompleted">
      <div class="card item-info">
        <h2>Lesson is completed</h2>
      </div>
      <div v-for="item in lesson" :key="item.word.id">
        <p
          :class="{ 'font-success': item.success, 'font-error': !item.success }"
        >
          {{ item.word.en }} - {{ item.word.ru }}
        </p>
      </div>
    </div>
    <div v-else class="lesson-item">
      <h3>{{ activeItem.word.ru }}</h3>
      <div class="card-wrapper">
        <div
          class="card"
          :class="{
            'alert-success': option.success,
            'alert-error': option.error,
          }"
          v-for="option in activeItem.options"
          :key="option.id"
          v-on:click="selectCard(option)"
        >
          {{ option.en }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import * as _ from "lodash";
import wordsList from "../data/translated";

const limit = 100;
const optionsLimit = 4;

let words = _.shuffle(_.clone(wordsList));

const lesson = [];
let i = 0;
let j = limit;

while (i < limit) {
  const word = words[i];
  const options = [word];

  for (let oI = 1; oI < optionsLimit; ++oI) {
    options.push(words[j]);
    j += 1;
  }

  lesson.push({
    word,
    options,
  });

  i += 1;
}
</script>

<template>
  <div class="dictionary">
    <h3>Lesson</h3>

    <div class="lessons" v-for="item in lesson" :key="item.word.id">
      <div class="lesson-item">
        <h3>{{ item.word.id }} - {{ item.word.en }} - {{ item.word.ru }}</h3>
        <div class="card-wrapper">
          <div class="card" v-for="option in item.options" :key="option.id">
            <b>{{ option.id }} - {{ option.en }} - {{ option.ru }}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

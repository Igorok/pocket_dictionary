<script setup lang="ts">
    import * as _ from 'lodash';
    import wordsList from '../data/translated';

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


      i += 1
    }


</script>

<template>
  <div>
    <h3>Lesson</h3>

    <ul>
      <li v-for="item in lesson" :key="item.word.id">
        <b>{{ item.word.id }} - {{ item.word.en }} - {{ item.word.ru }}</b>

        <ul>
          <li v-for="option in item.options" :key="option.id">
            <b>{{ option.id }} - {{ option.en }} - {{ option.ru }}</b>

          </li>
        </ul>

      </li>
    </ul>

  </div>
</template>

<style scoped>
</style>

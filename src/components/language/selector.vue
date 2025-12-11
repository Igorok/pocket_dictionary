<script setup lang="ts">
import type { Language } from '../../dto/language';
import { ref } from 'vue';
import { useLanguageStore } from '../../stores/language';
import languagesJson from '../../data_local/languages.json' with { type: 'json' };

const langStore = useLanguageStore();

let selected = ref('');



</script>

<template>
    <main>

        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>


    </main>
</template>

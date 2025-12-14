<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Language } from '../../dto/language';
import { useLanguageStore } from '../../stores/language';
import languagesJson from '../../data_local/languages.json' with { type: 'json' };

const langStore = useLanguageStore();
const languagesByCode = new Map();
for (const { code, name } of languagesJson) {
    languagesByCode.set(code, { code, name });
}

let selected = ref(langStore.language.code);
const languages = ref(languagesJson);

watch(selected, (lng) => {
  const item: Language = languagesByCode.get(lng);
  langStore.selectLanguage(item);
})

</script>

<template>
    <main>
        <select v-model="selected" class="select">
            <option v-for="lng in languages" :key="lng.code" :value="lng.code">{{lng.name}}</option>
        </select>
    </main>
</template>

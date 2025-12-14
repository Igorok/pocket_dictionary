import type { Language } from '../dto/language';
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => {
        const language: Language = { code: 'english', name: 'English' };
        return {
            language,
        };
    },
    getters: {
        getLanguage: (state): Language => {
            return state.language;
        }
    },
    actions: {
        selectLanguage({ code, name }: Language) {
            this.language = { code, name };
        }
    }
});

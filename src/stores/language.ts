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
        getStudent: (state): Language => {
            return state.language;
        }
    },
    actions: {
        select({ code, name }: Language) {
            this.language = { code, name };
        }
    }
});

import type { Language } from '../common/dto/language';
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => {
        const language: Language = { code: 'english', name: 'English', chars: [], };
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
        selectLanguage({ code, name, chars }: Language) {
            this.language = { code, name, chars };
        }
    }
});

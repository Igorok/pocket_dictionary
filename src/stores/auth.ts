import type { Student } from '../common/dto/student';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('student', {
    state: () => {
        const student = { id: '', email: '' };
        return {
            student
        };
    },
    getters: {
        getStudent: (state): Student => {
            return state.student;
        }
    },
    actions: {
        login({ id, email }: Student) {
            this.student = {
                id,
                email
            };
        }
    }
});

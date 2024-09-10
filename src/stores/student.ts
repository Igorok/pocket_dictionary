import type { Student } from '../dto/student';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { getRepository } from '../repositories/UserFirebase';

const repository = getRepository();

export const useStudentStore = defineStore('student', {
    state: () => {
        let student = repository.getCurrentUser();
        if (!student) {
            student = { id: '', email: '', password: '', signin: false };
        }
        return {
            student
        };
    },
    getters: {
        getStudent: (state): Student => {
            const s: Student = state.student;
            s.password = '';
            return s;
        }
    },
    actions: {
        login({
            id,
            email,
            password
        }: {
            id: string;
            email: string;
            password: string;
        }) {
            this.student = {
                id,
                email,
                password,
                signin: true
            };
        }
    }
});

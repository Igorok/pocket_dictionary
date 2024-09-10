import type { Student } from '../dto/student';
import { defineStore } from 'pinia';

import { getRepository } from '../repositories/UserFirebase';


export const useStudentStore = defineStore('student', {
    state: () => {
        const repository = getRepository(undefined);

        let student = repository.getCurrentUser();
        if (!student) {
            student = { id: '', email: ''};
        }
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
                email,
            };
        }
    }
});

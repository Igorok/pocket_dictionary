<script setup lang="ts">
import type { Student } from '../dto/student';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuthRepository } from '../repositories/AuthFirebase';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const repository = getAuthRepository(undefined);
const studentStore = useAuthStore();

let inputEmail = ref('');
let inputPassword = ref('');
let error = ref({
    message: ''
});

const signIn = async () => {
    try {
        const student: Student = await repository.signInWithEmailAndPassword({
            email: inputEmail.value,
            password: inputPassword.value
        });
        studentStore.login(student);
        error.value.message = '';

        router.push({ name: 'about' });
    } catch (e) {
        if (e instanceof Error) {
            error.value.message = e.message;
        }
    }
};
</script>

<template>
    <main>
        <div class="center-wrapper">
            <div class="center-container">
                <div v-if="Boolean(error.message)">
                    <div class="card item-error">
                        <h3>Error</h3>
                        <p>{{ error.message }}</p>
                    </div>
                </div>

                <h3 class="font-success">Sign In</h3>

                <form @submit.prevent="signIn">
                    <div class="form-item">
                        <label for="inputEmail" class="form-label"
                            >Email address</label
                        >
                        <input
                            type="email"
                            class="input-text"
                            id="inputEmail"
                            v-model="inputEmail"
                            required
                        />
                    </div>
                    <div class="form-item">
                        <label for="inputPassword" class="form-label"
                            >Password</label
                        >
                        <input
                            type="password"
                            class="input-text"
                            id="inputPassword"
                            v-model="inputPassword"
                            required
                        />
                    </div>
                    <br />
                    <div class="form-item">
                        <button class="btn">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { getStudentRepository } from './repositories/StudentFirebase';
import { useStudentStore } from './stores/student';

const studentRepository = getStudentRepository(undefined);
const studentStore = useStudentStore();
studentRepository.auth.onAuthStateChanged((user) => {
    if (user) {
        studentStore.login({
            email: user.email || '',
            id: user.uid,
        });
    }
});
</script>

<template>
    <header>
        <img alt="Logo" class="logo" src="./assets/book.jpeg" />

        <div class="wrapper">
            <HelloWorld msg="Pocket Dictionary" />

            <div v-if="Boolean(studentStore.getStudent?.id)">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/course-list">All courses</RouterLink>
                    <RouterLink to="/dictionary">Dictionary</RouterLink>
                </nav>
            </div>
            <div v-else>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/sign-in">Sign in</RouterLink>
                    <RouterLink to="/sign-up">Sign up</RouterLink>
                </nav>
            </div>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>

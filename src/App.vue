<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

import { useStudentStore } from './stores/student';
const studentStore = useStudentStore();


</script>

<template>
    <header>
        <img alt="Logo" class="logo" src="./assets/book.jpeg" />

        <div class="wrapper">
            <HelloWorld msg="Pocket Dictionary" />

            <div v-if="Boolean(studentStore.getStudent)">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
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

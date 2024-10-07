<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { getAuthRepository } from './repositories/AuthFirebase';
import { useAuthStore } from './stores/auth';

const authRepository = getAuthRepository(undefined);
const authStore = useAuthStore();

const user = authRepository.getCurrentUser();
if (user) {
    authStore.login(user);
}

let onAuthStateListener: Unsubscribe;
onBeforeMount(async () => {
    onAuthStateListener = authRepository.auth.onAuthStateChanged((updated) => {
        if (updated && !user) {
            authStore.login({
                email: updated.email || '',
                id: updated.uid
            });
        }
    });
});
onBeforeUnmount(() => {
    if (onAuthStateListener) {
        onAuthStateListener();
    }
});
</script>

<template>
    <header>
        <img alt="Logo" class="logo" src="./assets/book.jpeg" />

        <div class="wrapper">
            <h3 class="font-success">Pocket Dictionary</h3>

            <div v-if="Boolean(authStore.getStudent?.id)">
                <nav>
                    <RouterLink to="/">About</RouterLink>
                    <RouterLink to="/youtube-links">Youtube links</RouterLink>
                    <RouterLink to="/profile">Profile</RouterLink>
                    <RouterLink to="/course/list">All courses</RouterLink>
                </nav>
            </div>
            <div v-else>
                <nav>
                    <RouterLink to="/">About</RouterLink>
                    <RouterLink to="/sign-in">Sign in</RouterLink>
                    <RouterLink to="/sign-up">Sign up</RouterLink>
                </nav>
            </div>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>

<script setup lang="ts">
import type { Unsubscribe } from 'firebase/auth';
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getAuthDao } from './common/dao/AuthFirebase';
import { useAuthStore } from './stores/auth';
import ALertView from '@/components/alert/view.vue';

const menuHiddenRef = ref(true);
const menuToggle = () => {
    menuHiddenRef.value = !menuHiddenRef.value;
};

const AuthDao = getAuthDao(undefined);
const authStore = useAuthStore();

const user = AuthDao.getCurrentUser();
if (user) {
    authStore.login(user);
}

let onAuthStateListener: Unsubscribe;
onBeforeMount(async () => {
    onAuthStateListener = AuthDao.auth.onAuthStateChanged((updated) => {
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
        <div class="wrapper">
            <img alt="Logo" class="logo" src="./assets/book.jpeg" />

            <h3 class="font-success">Pocket Dictionary</h3>

            <button class="btn btn-green menu-toggle" v-on:click="menuToggle">
                Menu
            </button>
            <div
                class="nav"
                :class="{
                    'menu-hidden': menuHiddenRef
                }"
            >
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
        </div>
    </header>

    <div class="content">
        <ALertView />
        <RouterView />
    </div>
</template>

<style scoped></style>

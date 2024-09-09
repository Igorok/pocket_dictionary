<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { getRepository } from "./repositories/firebase";

const repository = getRepository();
let user = repository.getCurrentUser();
</script>

<template>
  <header>
    <img alt="Logo" class="logo" src="./assets/books.jpeg" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <div v-if="Boolean(user)">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/dictionary">Dictionary</RouterLink>
        </nav>
      </div>
      <div v-else>
        <nav>
          <RouterLink to="/sign-in">Sign in</RouterLink>
          <RouterLink to="/sign-up">Sign up</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>

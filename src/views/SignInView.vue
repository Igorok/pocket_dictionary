<script setup lang="ts">
import { ref } from "vue";
import { getRepository } from "../repositories/firebase";
import { useRouter } from "vue-router";
const router = useRouter();

const repository = getRepository();
let user = repository.getCurrentUser();

let inputEmail = ref("");
let inputPassword = ref("");

const signIn = () => {
  console.log(
    "inputEmail",
    inputEmail.value,
    "inputPassword",
    inputPassword.value,
  );
  repository.signInWithEmailAndPassword({
    email: inputEmail.value,
    password: inputPassword.value,
  });
  router.push({ name: "home" });
};
</script>

<template>
  <main>
    <div class="sign-in-container">
      <h3 class="font-success">Sign In</h3>
      <form @submit.prevent="signIn">
        <div class="form-item">
          <label for="inputEmail" class="form-label">Email address</label>
          <input
            type="email"
            class="input-text"
            id="inputEmail"
            v-model="inputEmail"
            required
          />
        </div>
        <div class="form-item">
          <label for="inputPassword" class="form-label">Password</label>
          <input
            type="password"
            class="input-text"
            id="inputPassword"
            v-model="inputPassword"
            required
          />
        </div>
        <div class="form-item">
          <button class="btn">Sign In</button>
        </div>
      </form>
    </div>
  </main>
</template>

import type { FBConfig } from "../dto/firebase";
import { firebaseConfig } from "../config/local-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 *
 *
 * https://firebase.google.com/docs/auth/web/start
 *
 */
class FBRepository {
  config: FBConfig;

  constructor(config: FBConfig) {
    this.config = config;
  }

  createUserWithEmailAndPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    localStorage.setItem("currentUser", JSON.stringify({ email, password }));
  }
  signInWithEmailAndPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    localStorage.setItem("currentUser", JSON.stringify({ email, password }));
  }
  getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser ? JSON.parse(currentUser) : undefined;
    // return auth.currentUser;
  }
}

let repository: FBRepository;
const getRepository = (): FBRepository => {
  if (!repository) {
    repository = new FBRepository(firebaseConfig);
  }
  return repository;
};

export { getRepository };

/*

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });














*/

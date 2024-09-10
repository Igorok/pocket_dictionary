import type { FBConfig } from '../dto/firebase';
import type { Student } from '../dto/student';
import { firebaseConfig } from '../config/local-config';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
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
        password
    }: {
        email: string;
        password: string;
    }) {
        const data = localStorage.getItem('currentUser');
        if (data) {
            const message = 'User already exists. Please correct and reenter.';
            const currentUser = JSON.parse(data);
            if (
                currentUser.email === email &&
                currentUser.password === password
            ) {
                throw new Error(message);
            }
        }

        localStorage.setItem(
            'currentUser',
            JSON.stringify({ email, password, id: '1', signin: false })
        );
    }

    signInWithEmailAndPassword({
        email,
        password
    }: {
        email: string;
        password: string;
    }): Student {
        const message =
            'Invalid Login or Password Information Entered.  Please correct and reenter.';
        const data = localStorage.getItem('currentUser');
        if (!data) {
            throw new Error(message);
        }

        const currentUser = JSON.parse(data);
        if (currentUser.email != email || currentUser.password !== password) {
            throw new Error(message);
        }
        currentUser.signin = true;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        return currentUser;
    }

    getCurrentUser(): Student | undefined {
        const data = localStorage.getItem('currentUser');
        if (!data) return undefined;
        const currentUser = JSON.parse(data);
        return currentUser ? currentUser.signin : undefined;
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

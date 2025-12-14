import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config/local-config';
import { getWordsRepository } from './dao/WordsLocal';
import { getAuthDao } from './dao/AuthFirebase';
import { getCourseRepository } from './dao/CourseFirebase';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
getWordsRepository();
getCourseRepository(db);
getAuthDao(firebaseApp);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');

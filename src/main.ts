import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config/local-config';
import { getStudentRepository } from './repositories/StudentFirebase';
import { getWordsRepository } from './repositories/WordsFirebase';
import { getAdminRepository } from './repositories/AdminFirebase';
import { getCourseRepository } from './repositories/CourseFirebase';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
getWordsRepository(db);
getAdminRepository(db);
getCourseRepository(db);
getStudentRepository(firebaseApp);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');

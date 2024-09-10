import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/local-config';
import { getRepository } from './repositories/UserFirebase';

import App from './App.vue';
import router from './router';

const firebaseApp = initializeApp(firebaseConfig);
getRepository(firebaseApp);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

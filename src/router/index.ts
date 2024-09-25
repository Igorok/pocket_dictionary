import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/sign-in',
            name: 'signIn',
            component: () => import('../views/SignInView.vue')
        },
        {
            path: '/sign-up',
            name: 'signUp',
            component: () => import('../views/SignUpView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue')
        },
        {
            path: '/course/list',
            name: 'course/list',
            component: () => import('../views/CourseListView.vue')
        },
        {
            path: '/course/words/test/:id',
            name: 'course-words-test',
            component: () => import('../views/CourseWordsTestView.vue')
        },
        {
            path: '/course/words/write/:id',
            name: 'course-words-write',
            component: () => import('../views/CourseWordsWriteView.vue')
        }
    ]
});

export default router;

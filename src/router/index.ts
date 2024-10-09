import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
            path: '/youtube-links',
            name: 'youtube-links',
            component: () => import('../views/YoutubeLinksView.vue')
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
        },
        {
            path: '/course/words/read/:id',
            name: 'course-words-read',
            component: () => import('../views/CourseWordsReadView.vue')
        },
        {
            path: '/course/verbs/read/:id',
            name: 'course-verbs-read',
            component: () => import('../views/CourseVerbsReadView.vue')
        },
        {
            path: '/course/verbs/write/:id',
            name: 'course-verbs-write',
            component: () => import('../views/CourseVerbsWriteView.vue')
        },
        {
            path: '/course/tenses/read/:id',
            name: 'course-tenses-read',
            component: () => import('../views/CourseTensesReadView.vue')
        },
        {
            path: '/course/tenses/write/:id',
            name: 'course-tenses-write',
            component: () => import('../views/CourseTensesWriteView.vue')
        }
    ]
});

export default router;

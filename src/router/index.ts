import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

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
            path: '/youtube-links',
            name: 'youtube-links',
            component: () => import('../views/YoutubeLinksView.vue')
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
            component: () => import('../views/ProfileView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/list',
            name: 'course/list',
            component: () => import('../components/CourseList/view.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/words/test/:id',
            name: 'course-words-test',
            component: () => import('../components/CourseWordsTest/view.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/words/write/:id',
            name: 'course-words-write',
            component: () => import('../views/CourseWordsWriteView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/words/read/:id',
            name: 'course-words-read',
            component: () => import('../views/CourseWordsReadView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/verbs/read/:id',
            name: 'course-verbs-read',
            component: () => import('../views/CourseVerbsReadView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/verbs/write/:id',
            name: 'course-verbs-write',
            component: () => import('../views/CourseVerbsWriteView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/sentences/read/:id',
            name: 'course-sentences-read',
            component: () => import('../views/CourseTensesReadView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/course/sentences/write/:id',
            name: 'course-sentences-write',
            component: () => import('../views/CourseTensesWriteView.vue'),
            meta: { requiresAuth: true },
        }
    ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const student = authStore.getStudent; // Assumes a state property

  if (to.meta.requiresAuth && !student?.id) {
    // If the route requires auth and the user is not logged in, redirect to login page
    next({ name: 'about' });
  } else {
    // Otherwise, allow navigation
    next();
  }
});

export default router;

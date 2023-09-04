// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page ici
import Home from '../pages/Home';
import About from '../pages/Questions';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/questions',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

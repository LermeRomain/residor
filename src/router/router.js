// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page ici
import Home from '../pages/Home';
import About from '../pages/Questions';
import QSN from '../pages/QSN';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/questions',
        component: About,
    },
    {
        path: '/qui-sommes-nous',
        component: QSN,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // Utilisez la position enregistrée si disponible
        } else {
            return { behavior: 'smooth', top: 0 }; // Faites défiler vers le haut de la page avec un effet smooth
        }
    },
});

export default router;

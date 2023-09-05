// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page ici
import Home from '../pages/Home';
import About from '../pages/Questions';
import QSN from '../pages/QSN';
import Services from "@/pages/Services";

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
    {
        path: '/services',
        component: Services,
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

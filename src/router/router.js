// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page ici
import Home from '../pages/Home';
import About from '../pages/Questions';
import QSN from '../pages/QSN';
import Services from "@/pages/Services";
import LogementDetails from "@/components/Logement/LogementDetails";
import Api from "@/components/Logement/Api";
import LogementInfos from "@/components/Logement/LogementInfos";
import Logements from "@/pages/Logements";
import MentionsLegales from "@/pages/MentionsLegales";
import Conditions from "@/pages/Conditions";

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
    {
        path: '/logements',
        component: Logements,
    },
    {
        path: '/logement/:id',
        name: 'logement-details',
        component: LogementDetails,
        props: true, // Pass route parameters as props
    },
    {
        path: '/logement/:id',
        name: 'Api',
        component: Api,
        props: true, // Pass route parameters as props
    },
    {
        path: '/logement/:id',
        name: 'LogementInfos',
        component: LogementInfos,
        props: true, // Pass route parameters as props
    },
    {
        path: '/mentionslegales',
        component: MentionsLegales,
    },
    {
        path: '/conditions',
        component: Conditions,
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

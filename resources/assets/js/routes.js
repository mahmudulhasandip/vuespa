import Home from './components/Home.vue';
import {
    login
} from './helpers/auth';

export const routes = [{
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: login,
    }
]
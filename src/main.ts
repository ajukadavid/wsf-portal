import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import SpDashboard from '../src/components/SpDashboard.vue'
import MinisterDashboard from '../src/components/MinisterDashboard.vue'
import SignUp from '../src/components/SignUp.vue'
import Login from '../src/components/Login.vue'

import './styles/app.css'; 


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: 'SpDashboard', 
            component: SpDashboard
        },
        {
            path: '/minister:id?', 
            name: 'MinisterDashboard',
            component: MinisterDashboard
        },
        {
            path: '/sign-up', 
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/log-in', 
            name: 'Login',
            component: Login
        },

    ],
})

const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')

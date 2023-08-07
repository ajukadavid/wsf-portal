import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import {routes} from './routes/routes'
import PrimeVue from 'primevue/config';

import './styles/app.css'; 


const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes
    ],
})

const pinia = createPinia()


createApp(App).use(PrimeVue).use(router).use(pinia).mount('#app')

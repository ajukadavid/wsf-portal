import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router';
import './style.css'
import App from './App.vue'
import SpDashboard from '../src/components/SpDashboard.vue'
import MinisterDashboard from '../src/components/MinisterDashboard.vue'
import './styles/app.css'; 


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'SpDashboard', component: SpDashboard},
        {path: '/minister', name: 'MinisterDashboard', component: MinisterDashboard},

    ]

})


createApp(App).use(router).mount('#app')

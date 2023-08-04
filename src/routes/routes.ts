import SpDashboard from '../components/SpDashboard.vue'
import MinisterDashboard from '../views/MinisterDashboard.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../components/Login.vue'
export const routes = [
    {
        path: '/', 
        name: 'SpDashboard', 
        component: SpDashboard
    },
    {
        path: '/ministerDashboard', 
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

]
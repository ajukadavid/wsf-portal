import SpDashboard from '../components/SpDashboard.vue'
import summary from '../components/summary.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../components/Login.vue'
import createReport from '../components/createReport.vue'

export const routes = [
    {
        path: '/', 
        name: 'SpDashboard', 
        component: SpDashboard
    },
    {
        path: '/summary', 
        name: 'summary',
        component: summary
    },
    {
        path: '/create-report', 
        name: 'createReport',
        component: createReport
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
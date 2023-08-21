import SpDashboard from '../components/SpDashboard.vue'
import reports from '../components/reports.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../components/Login.vue'
import createReport from '../components/createReport.vue'

export const routes = [
    {
        path: '/create-branches', 
        name: 'SpDashboard', 
        component: SpDashboard
    },
    {
        path: '/reports', 
        name: 'reports',
        component: reports
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
        path: '/', 
        name: 'Login',
        component: Login
    },

]
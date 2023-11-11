import SpDashboard from '../components/SpDashboard.vue'
import reports from '../components/reports.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../components/Login.vue'
import createReport from '../components/createReport.vue'
import createUser from '../components/createUser.vue'
import manageBranches from '../components/manageBranches.vue'
export const routes = [
    {
        path: '/dashboard', 
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
    {
        path: '/create-and-manage-users', 
        name: 'createUsers',
        component: createUser
    },
    {
        path: '/manage-branches', 
        name: 'manageBranches',
        component: manageBranches
    },
]
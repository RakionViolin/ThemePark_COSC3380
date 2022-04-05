import Home from '../components/home.js';
import Dashboard from '../components/dashboard.js';
import AdminDashboard from '../components/AdminDashboard.js';
import EmployeeDashboard from '../components/EmployeeDashboard.js';
import ManageUser from '../components/ManageUser.js';
import ManageArea from '../components/ManageArea.js';
import ManageRider from '../components/ManageRider.js';
import Register from '../components/Register.js';

const routes = [
    { path: '/login', name:'Login', component: Home },
    { path: '/register', name:'Register', component: Register },
    { path: '/dashboard', name:'Dashboard', component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    { path: '/admin/dashboard', name:'AdminDashboard', component: AdminDashboard },
    { path: '/employee/dashboard', name:'EmployeeDashboard', component: EmployeeDashboard },
    { path: '/manage-user', name:'Home', component: ManageUser },
    { path: '/manage-area', name:'Home', component: ManageArea },
    { path: '/manage-raider', name:'Home', component: ManageRider },
    { path: '/home', name:'Home', component: Home },
    { path: '/', name:'default', component: Home }
];

const router = new VueRouter({
    routes
});

export default router;

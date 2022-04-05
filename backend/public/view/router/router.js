import Home from '../components/home.js';
import Dashboard from '../components/dashboard.js';
import Register from '../components/Register.js';

const routes = [
    { path: '/login', name:'Login', component: Home },
    { path: '/register', name:'Register', component: Register },
    { path: '/dashboard', name:'Dashboard', component: Dashboard },
    { path: '/home', name:'Home', component: Home },
    { path: '/', name:'default', component: Home }
];

const router = new VueRouter({
    routes
});

export default router;

import Welcome from "../pages/welcome/welcome";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Dashboard from "../pages/dashboard/dashboard";
import CompleteEmail from "../pages/register/CompleteEmail";
import AddInstance from "../pages/AddInstance/AddInstance";
export const roots = [
    {
        path: "/",
        component: Welcome,
        needAuth: false,
    },
    {
        path: '/register',
        component: Register,
        needAuth: false,
    },
    {
        path: '/complete-email',
        component: CompleteEmail,
        needAuth: false,
    },
    {
        path: '/login',
        component: Login,
        needAuth: false,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        needAuth: true,
    },
    {
        path: '/addInstance',
        component: AddInstance,
        needAuth: true,
    }
];

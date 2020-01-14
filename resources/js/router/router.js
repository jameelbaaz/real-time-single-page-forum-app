import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'


Vue.use(VueRouter)

const routes=[
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/signup', component: Signup},
    {path: '/forum', component: Forum, name: 'forum'},
    {path: '/question/:slug', component: Read, name: 'read'},
    {path: '/ask', component: Create}
];

const router = new VueRouter({
    routes, // short for 'routes: routes'
   mode: 'history',
})

export default router;
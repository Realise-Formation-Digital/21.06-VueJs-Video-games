import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

export default router

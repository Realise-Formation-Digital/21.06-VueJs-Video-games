import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import home from "../pages/home.vue";
import contact from "../pages/contact.vue";
import result from "../pages/result.vue";
import about from "../pages/about.vue";
import recherche from "../pages/recherche.vue";

const routes = [
    { path: '/', component: home },
    { path: '/contact', component: contact },
    { path: '/about', component: about },
    { path: '/result', component: result },
    { path: '/recherche', component : recherche},
    
]

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

export default router

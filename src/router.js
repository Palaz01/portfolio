import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Work from './components/Work.vue'
import Skills from './components/Skills.vue'

Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/work',
            name: 'work',
            component: Work
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})


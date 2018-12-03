import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditSite from './views/EditSite.vue'
import UserLogin from './views/UserLogin.vue'
import PreviewSite from './views/PreviewSite.vue'
import About from './views/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },{
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/',
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
=======
>>>>>>> 1ffc2781df50a89d0a30d7b3a7febad7c6a001f4
      path: '/preview/:siteId?',
      name: 'preview',
      component: PreviewSite
    },
    {
      path: '/edit/:siteId?',
      name: 'edit',
      component: EditSite
    },
<<<<<<< HEAD
    {
      path: '/test',
      name: 'hero',
      component: heroA
    },
=======
>>>>>>> 1ffc2781df50a89d0a30d7b3a7febad7c6a001f4
  ]
})
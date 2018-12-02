import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditSite from './views/EditSite.vue'
import UserLogin from './views/UserLogin.vue'
import heroA from './components/elements/video.el.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:siteId?',
      name: 'home',
      component: Home
    },
    {
      path: '/edit/:siteId?',
      name: 'edit',
      component: EditSite
    },
    {
      path: '/test',
      name: 'hero',
      component: heroA
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
  ]
})
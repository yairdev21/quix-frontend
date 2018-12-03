import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditSite from './views/EditSite.vue'
import UserLogin from './views/UserLogin.vue'
import heroA from './components/elements/video.el.vue'
import PreviewSite from './views/PreviewSite.vue'
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
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/preview/:siteId?',
      name: 'preview',
      component: PreviewSite
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
  ]
})
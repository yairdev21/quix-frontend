import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditSite from './views/EditSite.vue'
import UserLogin from './views/UserLogin.vue'
import userPage from './views/userPage.vue'
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
      path: '/preview/:siteId?',
      name: 'preview',
      component: PreviewSite
    },
    {
      path: '/edit/:siteId?',
      name: 'edit',
      component: EditSite
    },{
      path: '/:user/:siteName',
      name: 'userPreview',
      component: PreviewSite
    },{
      path: '/userboard',
      name: 'userPage',
      component: userPage
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import About from './views/About.vue'
=======
import heroA from './components/elements/section-article.cmp.vue'

>>>>>>> fdf357cef6d0adf6e2f39ec352a88e6afdf92646

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      component: About
=======
      path: '/test',
      name: 'hero1',
      component: heroA
>>>>>>> fdf357cef6d0adf6e2f39ec352a88e6afdf92646
    },

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
=======
import About from './views/About.vue'
>>>>>>> 63fc68a223fc3cafe3ed284df1c224f5432f2a35
import heroA from './components/elements/section-article.cmp.vue'


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
      path: '/test',
=======
      path: '/about',
      name: 'about',
      component: About},
      {path: '/test',
>>>>>>> 63fc68a223fc3cafe3ed284df1c224f5432f2a35
      name: 'hero1',
      component: heroA
    },

  ]
})

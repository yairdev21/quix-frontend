import Vue from 'vue'
import Vuex from 'vuex'
import siteModule from './modules/site-module.js'
import sectionModule from './modules/section-module.js'
import userModule from './modules/user-module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    siteModule,
    sectionModule,
    userModule
  }
})

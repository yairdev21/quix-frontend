import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import siteModule from './modules/site-module.js'
import userModule from './modules/user-module.js'
import sectionModule from './modules/section-module.js'

Vue.use(Vuex)

export default new Store({
  modules: {
    siteModule,
<<<<<<< HEAD
    sectionModule,
    userModule
  }
})
=======
    sectionModule
  },
 
})
>>>>>>> b342ab003d4604030efa65a0599e41ec8ae5f441

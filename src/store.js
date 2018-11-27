import Vue from 'vue'
import Vuex from 'vuex'
import SiteService from './services/site-service.js'
<<<<<<< HEAD
import Article from 'modules/article'
=======
import Article from './modules/article.js'
>>>>>>> 63fc68a223fc3cafe3ed284df1c224f5432f2a35

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Article
  },
  state: {
    sections: []
  },
  mutations: {
    loadSections(state, {
      sections
    }) {
      state.sections = sections;
    },
  },
  actions: {
    getSections(context) {
      return SiteService.query()
        .then(sections => {
          context.commit({
            type: 'loadSections',
            sections
          });
          return sections;
        })
    }
  }
})
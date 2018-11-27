import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import SiteService from './services/site-service.js'
=======
import Article from 'modules/article'
>>>>>>> fdf357cef6d0adf6e2f39ec352a88e6afdf92646

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
import Vue from 'vue'
import Vuex from 'vuex'
import SiteService from './services/site-service.js'
import Article from './modules/article.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Article
  },
  state: {
    site: null
  },
  mutations: {
    loadSite(state, { site }) {
      state.site = site;
      console.log(site);

    },
  },
  actions: {
    getSite(context) {
      return SiteService.query()
        .then(site => {
          context.commit({ type: 'loadSite' , site});
          return site;
        })
    }
  }
})
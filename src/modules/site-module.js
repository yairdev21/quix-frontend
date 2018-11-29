import siteService from '../services/site-service.js'
import sectionService from '../services/section-service.js'

export default {
  state: {
    site: null
  },
  mutations: {
    loadSite(state, { site }) {
      state.site = site;
    },
    addSection(state, { idx, section }) {
      state.site.elements.splice(idx, 0, section)
      // console.log(section);

    },
  },
  actions: {
    getSite(context) {
      return siteService.query()
        .then(site => {
          context.commit({ type: 'loadSite', site });
          return site;
        })
    },
    addSection({ commit }, { idx, sectionName }) {
      sectionService.getSectionByName(sectionName)
        .then(section => {
          commit({ type: 'addSection', idx, section })
        })
    },
  }
}
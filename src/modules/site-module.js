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
    addSection(state, { section }) {
      state.site.sections.push(section)
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
    addSection({ commit }, { sectionType }) {
      sectionService.getSectionByType(sectionType)
        .then(section => {
          commit({ type: 'addSection', section })
        })
    },
  }
}
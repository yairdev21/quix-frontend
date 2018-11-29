import siteService from '../services/site-service.js'
import sectionService from '../services/section-service.js'

export default {
  state: {
    site: null,
    sites: []
  },
  mutations: {
    loadSite(state, {
      site
    }) {
      state.site = site;
    },
    loadSites(state, {
      sites
    }) {
      state.sites = sites;
    },
    addSection(state, {
      idx,
      section
    }) {
      state.site.elements.splice(idx, 0, section)
      // console.log(section);

    },
  },
  actions: {
    getSite(context) {
      return siteService.query()
        .then(site => {
          context.commit({
            type: 'loadSite',
            site
          });
          return site;
        })
    },
    getSites(context) {
      return siteService.getSites()
        .then(sites => {
          context.commit({
            type: 'loadSites',
            sites
          })
          return sites
        })
    },
    editSite(context, {siteId}) {
      return siteService.getSiteById(siteId)
        .then(site => {
          context.commit({
            type: 'loadSite',
            site
          })
          return site
        })
    },
    addSection({
      commit
    }, {
      idx,
      sectionName
    }) {
      sectionService.getSectionByName(sectionName)
        .then(section => {
          commit({
            type: 'addSection',
            idx,
            section
          })
        })
    },
  }
}
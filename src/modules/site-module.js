import siteService from '../services/site-service.js'

export default {
  state: {
    site: null,
    sites: [],
    editMode:null
  },
  mutations: {
    loadSite(state, {
      site
    }) {
      state.site = site;
    },
    loadSites(state, { sites }) {
      state.sites = sites;
    },
<<<<<<< HEAD
   
=======
    addSection(state, {
      idx,
      section
    }) {
      state.site.elements.splice(idx, 0, section)
      // console.log(section);
    },
>>>>>>> 0fd0a2f566f403f60627f8afa5b434b8c3fcbcfa
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
    editSite(context, { siteId }) {
      return siteService.getSiteById(siteId)
        .then(site => {
          context.commit({
            type: 'loadSite',
            site
          })
          return site
        })
    },
 
  }
}
import siteService from '../services/site-service.js'

export default {
    state: {
        site: null,
        sites: [],
        editMode: null
    },
    mutations: {
        loadSites(state, { site }) {
            state.site = site;
        },
        loadSite(state, { site }) {
            state.site = site;
        },
        saveSite(state, { site }) {
            state.site = site;
        },
    },
    actions: {
        query(context) {
            return siteService.query()
                .then(sites => {
                    context.commit({
                        type: 'loadSites',
                        sites
                    })
                    return sites
                })
        },
        getSiteById(context, { siteId }) {
            return siteService.getSiteById(siteId)
                .then(site => {
                    context.commit({
                        type: 'loadSite',
                        site
                    })
                    return site
                })
        },
        saveSite(context, { site }) {
            return siteService.saveSite(site)
                .then(site => {
                    context.commit({
                        type: 'saveSite',
                        site
                    })
                    return site
                })
        },
    }
}
import siteService from '../services/site-service.js'

export default {
    state: {
        isEditMode: false,
        site: null,
        sites: [],
        editMode: null
    },
    getters: {
        getMode: state => state.isEditMode
    },
    mutations: {
        setEditMode(state) {
            state.isEditMode = true;
        },
        setPreviewMode(state) {
            state.isEditMode = false;
        },
        loadSite(state, {
            site
        }) {
            state.site = site;
        },
        saveSite(state, {
            site
        }) {
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
        getSiteById(context, {
            siteId
        }) {
            return siteService.getSiteById(siteId)
                .then(site => {
                    context.commit({
                        type: 'loadSite',
                        site
                    })
                    return site
                })
        },
        saveSite(context, {site}) {
            siteService.saveSite(site)
                .then(site => {
                    
                    context.commit({
                        type: 'saveSite',
                        site
                    })
                })
                
        },
        updateSite(context, {site}){ 
            console.log(site);
            
        }
    }
}
import siteService from '../services/site-service.js'
export const SET_IS_NEW = 'SET_IS_NEW';

export default {
    state: {
        isEditMode: false,
        site: null,
        sites: [],
        editMode: null,
        isNewSite: undefined
    },
    getters: {
        getMode: state => state.isEditMode,
        getIsNew: state => state.isNewSite
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
        loadSites(state, { sites }) {
            state.sites = sites
        },
        [SET_IS_NEW](state, {isNewSite}) {
            state.isNewSite = isNewSite
        }
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
        saveSite(context, { site }) {
            const isNew = (context.isNewSite) ? 'saveSite' : 'updateSite';

            siteService[isNew](site)
                .then(site => {
                    context.commit({
                        type: 'saveSite',
                        site
                    })
                })

        },
        // updateSite(context, { site }) {
        // },
        [SET_IS_NEW]({ commit }, { isNewSite }) {
            console.log(isNewSite);
            
            commit({
                type: SET_IS_NEW,
                isNewSite
            })
        }
    }
}

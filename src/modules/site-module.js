import siteService from '../services/site-service.js'
export const SET_IS_NEW = 'SET_IS_NEW';

export default {
    state: {
        isEditMode: false,
        site: null,
        sites: [],
        editMode: null,
        isNewSite: undefined,
    },
    getters: {
        getMode: state => state.isEditMode,
        getIsNew: state => state.isNewSite,
        getSite: state => state.site,
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
        loadSites(state, {
            sites
        }) {
            state.sites = sites
        },
        [SET_IS_NEW](state, {
            isNewSite
        }) {
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
        async saveSite({ commit }, { site}) {
            console.log('NOT SAVING');
            
            const func = (this.getters.getIsNew) ? 'saveSite' : 'updateSite';
            const Site = await siteService[func](site);

            commit({type: 'saveSite', Site});

            return Site._id;
        },

        [SET_IS_NEW]({
            commit
        }, {
            isNewSite
        }) {
            commit({
                type: SET_IS_NEW,
                isNewSite
            })
        }
    }
}
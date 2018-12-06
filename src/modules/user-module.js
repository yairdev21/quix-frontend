import { getUser } from '../services/api.service'

export const LOAD_USER = 'LOAD_USER';

export default {
    state: {
        user: null
    },
    getters: {
        getUser: state => state.user
    },
    mutations: {
        [LOAD_USER](state, { user }) {
            state.user = user
        },
        
        // setEditMode(state) {
        //     state.isEditMode = true;
        // },
        // setPreviewMode(state) {
        //     state.isEditMode = false;
        // },
        // loadSite(state, {
        //     site
        // }) {
        //     state.site = site;
        // },
        // saveSite(state, {
        //     site
        // }) {
        //     state.site = site;
        // },
    },
    actions: {
        async [LOAD_USER]({ commit }) {
            const user = await getUser();

            commit({
                type: LOAD_USER,
                user
            });

            return user;
        }

        // getSiteById(context, {
        //     siteId
        // }) {
        //     return siteService.getSiteById(siteId)
        //         .then(site => {
        //             context.commit({
        //                 type: 'loadSite',
        //                 site
        //             })
        //             return site
        //         })
        // },
        // saveSite(context, {site}) {
        //     siteService.saveSite(site)
        //         .then(site => {
                    
        //             context.commit({
        //                 type: 'saveSite',
        //                 site
        //             })
        //         })
                
        // },
        // updateSite(context, {site}){ 
        //     console.log(site);
            
        // }
    }
}
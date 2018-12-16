import {
    getUser
} from '../services/api.service';
import siteService from '../services/site-service.js';

export const LOAD_USER = 'LOAD_USER';
export const GET_USER_SITES = 'GET_USER_SITES';

export default {
    state: {
        user: null
    },
    getters: {
        getUser: state => state.user
    },
    mutations: {
        [LOAD_USER](state, {
            user
        }) {
            state.user = user
        },

        [GET_USER_SITES](state, {
            isNewSite
        }) {
            state.isNewSite = isNewSite
        }
    },
    actions: {
        async [LOAD_USER]({
            commit
        }) {
            const user = await getUser();
            commit({
                type: LOAD_USER,
                user
            });
            return user;
        },

        async [GET_USER_SITES]({
            commit
        }, {
            userId
        }) {
            
            const templates = await siteService.getUserTemplate(userId);
            commit({
                type: GET_USER_SITES,
                templates
            });

            return templates;
        }
    },
}
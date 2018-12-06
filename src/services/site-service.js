import axios from "axios";

const BASE_URL =  process.env.NODE_ENV === 'production' ?
    '' :
    '//localhost:3000';

export default {
    query,
    getSiteById,
    saveSite,
    saveNewSite,
    updateSite
}

function query() {
    return axios.get(BASE_URL + '/sites')
        .then(res => res.data.templates)
}

function getSiteById(siteId) {
    return axios.get(BASE_URL + '/sites/' + siteId)
        .then(res => res.data.tamplate)
}

function saveSite(site) {
    if (!site.date) {
        return axios.put(`${BASE_URL}/sites/${site._id}`, site)
    } else {
        return axios.post(`${BASE_URL}`, site)
    }
}

function updateSite(site) {
    return axios.put(`${BASE_URL}/sites/${site._id}`, site)
}

function saveNewSite(site) {
    const Site = _clearIds(site);

    return axios.post(`${BASE_URL}/sites/${site.user}`, Site);
}

function _clearIds(obj) {
    return Object.keys(obj).reduce((acc, next) => {
         if (typeof obj[next] === 'object') {
             acc[next] = _clearIds(obj[next])
         } else {
             if (next !== '_id') {
                 acc[next] = obj[next]
             }
         }

         return acc;         
     },{})
}
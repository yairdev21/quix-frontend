import axios from "axios";

const BASE_URL =  process.env.NODE_ENV === 'production' ?
    '' :
    '//localhost:3000';

export default {
    query,
    getSiteById,
    saveSite
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
    if (site._id) {
        return axios.put(`${BASE_URL}/sites/${site._id}`, site)
    } else {
        return axios.post(`${BASE_URL}`, site)
    }
}
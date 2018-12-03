import axios from "axios";

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/sites/'
    : '//localhost:3000/sites';

export default {
    query,
    getSiteById,
    saveSite
}

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data.templates)
}

function getSiteById(siteId) {
    return axios.get(BASE_URL + '/' + siteId)
        .then(res => res.data.tamplate)
}

function saveSite(site) {
    if (site._id) return axios.put(BASE_URL + '/' + site._id, site)
        .then(() => console.log('site saved!'))
    else {
        return axios.post(`${BASE_URL}`, site)
        .then(() => console.log('site not saved!'))
    }
}
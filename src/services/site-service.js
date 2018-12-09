import axios from "axios";
const queryString = require('query-string');

const BASE_URL =  process.env.NODE_ENV === 'production' ?
    '' :
    '//localhost:3000';
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

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

async function saveSite(site) {
    const Site = _clearIds(site);
    
    debugger
    const { data } = await axios.post(`${BASE_URL}/sites/`, Site);
    console.log(data);
    return data;
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
         if (typeof obj[next] === 'object' && Object.prototype.toString.call( obj[next] ) !== '[object Array]') {
             acc[next] = _clearIds(obj[next])
         } else {
             if (next !== '_id') {
                 acc[next] = obj[next]
             }
         }

         return acc;         
     },{})
}
import axios from "axios";

export default {
    query,
    getSites,
    getSiteById
}

function query() {
    return axios.get('dummySite.json')
        .then(res => JSON.parse(JSON.stringify(res.data)))
}

function getSites() {
    return axios.get('sites.json')
        .then(res => res.data)
}

function getSiteById(siteId) {
    return axios.get('../sites.json')
        .then(sites =>
            sites.data.filter(site => {
                return site._id === siteId
            }))
}
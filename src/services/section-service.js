import axios from "axios";

export default {
    query,
    getSectionByName,
    getExmapleSections
}

function query() {
    return axios.get('dummySection.json')
        .then(res => {
            return res.data
        })
}

function getSectionByName(sectionName) {
    console.log(sectionName);

    const sections = require('../../public/dummySection.json')
    return new Promise((resolve) => {
        resolve(sections.find(section => sectionName === section.name))
    })
}

function getExmapleSections() {
    return require('../../public/dummySection.json')
}
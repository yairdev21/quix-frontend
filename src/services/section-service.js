import axios from "axios";

export default {
    query,
    getSectionByName
}
function query() {
    return axios.get('dummySection.json')
        .then(res => {
            return res.data
        })
}

function getSectionByName(sectionName) {
    return axios.get('dummySection.json')
        .then(res => {
            const sections = res.data
            return sections.find(section => {
                return sectionName === section.name
            })
        })
}

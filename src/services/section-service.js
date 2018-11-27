import axios from "axios";

export default {
    query,
    getSectionByType
}
function query() {
    return axios.get('dummySection.json')
        .then(res => {
            return res.data
        })
}

function getSectionByType(sectionType) {
    return axios.get('dummySection.json')
        .then(res => {
            const sections = res.data
            return sections.find(section => {
                return sectionType === section.sectionType
            })
        })
}

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
<<<<<<< HEAD
    const sections = require('../../public/dummySection.json')
    return new Promise((resolve)=>{
        resolve(sections.find(section => sectionName === section.name))
    })
=======
    return axios.get(`dummySection.json`)
        .then(res => {
            console.log(res);
            
            const sections = res.data
            return sections.find(section => {
                return sectionName === section.name
            })
        })
>>>>>>> 7f93dd2222f4fe4064b7c3628efc4eeb08098cfe
}

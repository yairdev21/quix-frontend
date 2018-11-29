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
>>>>>>> 0fd0a2f566f403f60627f8afa5b434b8c3fcbcfa
}

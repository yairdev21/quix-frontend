import axios from "axios";
import {
    EventBus
} from "@/event-bus.js";

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
    if (sectionName === "video" || sectionName === "oneColsSectionWithVid") {
        EventBus.$emit("getVideoUrl")
    }
    const sections = require('../../public/dummySection.json')
    return new Promise((resolve) => {
        resolve(sections.find(section => sectionName === section.name))
    })
}

function getExmapleSections() {
    return require('../../public/dummySection.json')
}
import sectionService from "../services/section-service.js";

export default {
    sortElements,
    addElement
}

function sortElements(dragedIdx, dropedIdx, site) {
    console.log(dragedIdx, dropedIdx);
    if (dragedIdx < dropedIdx) {
        site.sections.splice(
            dropedIdx + 1,
            0,
            site.sections[dragedIdx]
        );
        site.sections.splice(dragedIdx, 1);
    } else if (dragedIdx > dropedIdx) {
        site.sections.splice(
            dropedIdx,
            0,
            site.sections[dragedIdx]
        );
        site.sections.splice(dragedIdx + 1, 1);
    }
    return site
}
function addElement(sectionName, idx, site) {
    return sectionService.getSectionByName(sectionName)
    .then(section => {
        site.sections.splice(idx, 0, section)
    });
}
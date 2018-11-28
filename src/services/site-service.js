import axios from "axios";

export default {
query
    
}
function query() {
    return axios.get('dummySite.json')
    .then(res=> JSON.parse(JSON.stringify(res.data)))
}
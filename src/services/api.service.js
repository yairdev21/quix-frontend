import axios from 'axios';
const queryString = require('query-string');

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
};

const baseUrl = `http://localhost:3000/user/`

export const logIn = async (user) => {    
    try {
        const URL = `${baseUrl}signin`;
        const res = await axios.post(URL, queryString.stringify(user), config);
    
        return res;
    } catch (err) {
        console.log(err);        
    }
}
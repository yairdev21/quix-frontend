import axios from 'axios';
const queryString = require('query-string');

const config = {
    headers: {
      ['Content-Type']: 'application/x-www-form-urlencoded',
    }
};

const baseUrl = `http://localhost:3000/user/`

export const logIn = async (user) => {    
        const URL = `${baseUrl}signin`;
        const { data } = await axios.post(URL, queryString.stringify(user), config)

        localStorage.setItem('jwt', data.token);

        return data;
}

export const signUp = async (user) => {        
    const URL = `${baseUrl}signup`;
    const { data } = await axios.post(URL, queryString.stringify(user), config);
    
    localStorage.setItem('jwt', data.token);

    return data;
}

export const getUser = async () => {
    if(localStorage.getItem('jwt')) {
        config.headers.Authorization = `bearer ${localStorage.getItem('jwt')}`;

        const {data} = await axios.get(baseUrl, config);
        const { email, userName, id, image } = data;

        return { email, userName, id, image };
    }

    return undefined;
}

export const logOut = async () => {    
    localStorage.clear()
}
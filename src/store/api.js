import axios from 'axios';

const token = '';

const api = axios.create({
    baseURL: 'https://sandboxapi.reststate.org/',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});


export default api;
import axios from 'axios';

const token = 'ENTER_KEY_HERE_CURRENTLY_SITE_IS_DOWN';

const api = axios.create({
    baseURL: 'https://sandboxapi.reststate.org/',
    headers: {
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${token}`,
    },
});


export default api;
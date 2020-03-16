import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

});

// instance.defaults.headers.common["Authorization"] = 'Auth token from the instance';

export default instance;
const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '44676e614d5927b0e2964996efe4f103';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;

import axios from 'axios';

const api_url = 'http://localhost:3000/';
const axiosInstance = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export default api;
export { baseUrl };

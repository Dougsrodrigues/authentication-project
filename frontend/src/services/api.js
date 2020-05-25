import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localholst:3333',
});

export default api;

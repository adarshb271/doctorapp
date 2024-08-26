import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8888',
  timeout: 9900,
  headers: `Bearer ${localStorage.getItem('token')}`,
});

export default instance;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/api/',
});

export default instance
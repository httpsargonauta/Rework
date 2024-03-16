import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://2vhqhtzf-3004.use2.devtunnels.ms/api/',
});

export default instance
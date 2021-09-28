import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL,
});

export default api;

import axios from 'axios';

export const API = axios.create({
  baseURL: `localhost:3000/food-explorer/api`,
});
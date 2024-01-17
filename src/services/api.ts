import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.MAIN_URL}/api`,
})
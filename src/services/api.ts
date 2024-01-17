import axios from 'axios';

export const api = axios.create({
  baseURL: `https://dtmoney-jef53.vercel.app/api`,
})
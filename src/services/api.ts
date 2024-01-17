import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-beige-beta.vercel.app/api'
})
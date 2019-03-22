import axios from 'axios';
import { restURL } from '../baseURL';

export const login = (user) => axios.post(`${restURL}/login`, {
    body: user
});
export const register = (user) => axios.post(`${restURL}/register`, {
    body: user
});

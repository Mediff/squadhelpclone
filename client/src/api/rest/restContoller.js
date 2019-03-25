import axios from 'axios';
import { restURL } from '../baseURL';
import { getToken } from '../../utils/auth/auth';

export const login = (user) => axios.post(`${restURL}/login`, user);
export const register = (user) => axios.post(`${restURL}/register`, user);

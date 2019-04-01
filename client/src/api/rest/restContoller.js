import axios from 'axios';
import { restURL } from '../baseURL';
import { getToken } from '../../utils/localStorage/localStorage';

axios.defaults.headers.common['Authorization'] = getToken();

export const login = (user) => axios.post(`${restURL}/login`, user);
export const register = (user) => axios.post(`${restURL}/register`, user);
export const getUser = () => axios.get(`${restURL}/user`);
export const getUserContests = () => axios.get(`${restURL}/contests/user`);
export const getContestTypes = () => axios.get(`${restURL}/types`);

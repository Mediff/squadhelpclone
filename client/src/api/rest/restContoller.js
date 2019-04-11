import axios from 'axios';
import { restURL } from '../baseURL';

export const login = (user) => axios.post(`${restURL}/login`, user);
export const register = (user) => axios.post(`${restURL}/register`, user);
export const getUser = () => axios.get(`${restURL}/user`);
export const getUserContests = () => axios.get(`${restURL}/contests/user`);
export const getContestTypes = () => axios.get(`${restURL}/types`);
export const getIndustries = () => axios.get(`${restURL}/types/industries`);
export const getStyles = () => axios.get(`${restURL}/types/styles`);
export const getNameTypes = () => axios.get(`${restURL}/types/nametypes`);
export const createContest = (contest) => axios.post(`${restURL}/contests`, contest);
export const uploadFile = (file) => axios.post(`${restURL}/files`, file);
export const proceedPay = (contest) => axios.put(`${restURL}/contests/pay`, contest);
export const updateEntry = (entry) => axios.put(`${restURL}/entries`, entry);
export const updateContest = (contest) => axios.put(`${restURL}/contests`, contest);
export const getCombinedTypes = () => axios.get(`${restURL}/types/all`);
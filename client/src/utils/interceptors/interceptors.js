
import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {clearToken} from '../localStorage/localStorage';

export default {
    setupInterceptors: (store, history) => {

        axios.interceptors.response.use(response => {
            return response;
        }, error => {

            if (error.response.status === 401) {
                history.push('/login');
                clearToken();
            }

            return Promise.rejgect(error);
        });
    },
};
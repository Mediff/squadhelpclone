
import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {clearToken} from '../localStorage/localStorage';

export default {
    setupInterceptors: (store) => {

        axios.interceptors.response.use(response => {
            return response;
        }, error => {

            if (error.response.status === 401) {
                store.dispatch({type: ACTION.IS_AUTH});
                clearToken();
            }

            return Promise.rejgect(error);
        });
    },
};
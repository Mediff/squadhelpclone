import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {setToken} from '../utils/localStorage/localStorage';

import {
    login, register, getUser
} from '../api/rest/restContoller';

export function* loginSaga({payload}) {
    yield put({type: ACTION.LOGIN_REQUEST});
    try {
        const {user, history} = payload;
        const {data} = yield login(user);
        const {account, token} = data;
        setToken(token);
        yield put({type: ACTION.LOGIN_RESPONSE, payload: account});
        history.push('/');

    } catch (e) {
        yield put({type: ACTION.LOGIN_ERROR, error: e.response.data});
    }
}

export function* registerSaga({payload}) {
    yield put({type: ACTION.REG_REQUEST});
    try {
        const {user, history} = payload;
        const {data} = yield register(user);
        const {account, token} = data;
        setToken(token);
        yield put({type: ACTION.REG_RESPONSE, payload: account});
        history.push('/');
    } catch (e) {
        yield put({type: ACTION.REG_ERROR, error: e.response.data});
    }
}

export function* getUserSaga() {
    try {
        const {data} = yield getUser();
        yield put({type: ACTION.GET_USER_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_USER_ERROR, error: e.response.data});
    }
}

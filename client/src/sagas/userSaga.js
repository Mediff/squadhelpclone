import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {setToken} from '../utils/localStorage/localStorage';

import {
    login, register, getUser
} from '../api/rest/restContoller';

export function* loginSaga({payload}) {
    yield put({type: ACTION.LOGIN_REQUEST});
    try {
        const {data} = yield login(payload);
        const {account, token} = data;
        setToken(token);
        yield put({type: ACTION.LOGIN_RESPONSE, payload: account});
    } catch (e) {
        yield put({type: ACTION.LOGIN_ERROR, error: e});
    }
}

export function* registerSaga({payload}) {
    yield put({type: ACTION.REG_REQUEST});
    try {
        const {data} = yield register(payload);
        const {account, token} = data;
        setToken(token);
        yield put({type: ACTION.REG_RESPONSE, payload: account});
    } catch (e) {
        yield put({type: ACTION.REG_RESPONSE, error: e});
    }
}

export function* getUserSaga() {
    try {
        const {data} = yield getUser();
        yield put({type: ACTION.GET_USER_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_USER_ERROR, error: e});
    }
}

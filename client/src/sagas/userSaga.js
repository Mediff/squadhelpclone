import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {setToken} from '../utils/auth/auth';

import {
  login, register, sendTest
} from '../api/rest/restContoller';

export function* loginSaga({payload}) {
  yield put({ type: ACTION.LOGIN_REQUEST });
  try {
    const { data } = yield login(payload);
    setToken(data);
    yield put({ type: ACTION.LOGIN_RESPONSE, payload: data });
  } catch (e) {
    yield put({ type: ACTION.LOGIN_ERROR, error: e });
  }
}

export function* registerSaga({ payload }) {
  yield put({ type: ACTION.REG_REQUEST });
  try {
    const { data } = yield register(payload);
    setToken(data);
    yield put({ type: ACTION.REG_RESPONSE, payload: data });
  } catch (e) {
    yield put({ type: ACTION.REG_RESPONSE, error: e });
  }
}

export function * sendTestSaga({payload}) {
  try{
    yield sendTest();
  } catch(e){

  }
}

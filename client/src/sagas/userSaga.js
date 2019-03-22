import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  login, register,
} from '../api/rest/restContoller';

export function* loginSaga({payload}) {
  yield put({ type: ACTION.LOGIN_REQUEST });
  try {
    const { data } = yield login(payload);
    yield put({ type: ACTION.LOGIN_RESPONSE, payload: data });
  } catch (e) {
    yield put({ type: ACTION.LOGIN_ERROR, error: e });
  }
}

export function* registerSaga({ payload }) {
  yield put({ type: ACTION.REG_REQUEST });
  try {
    const { data } = yield register(payload);
    yield put({ type: ACTION.REG_RESPONSE, payload: data });
  } catch (e) {
    yield put({ type: ACTION.REG_RESPONSE, error: e });
  }
}

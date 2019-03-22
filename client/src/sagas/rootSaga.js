import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga, registerSaga,
} from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REG_ACTION, registerSaga);
}

export default rootSaga;

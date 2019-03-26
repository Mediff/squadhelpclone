import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga, registerSaga, sendTestSaga
} from './userSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REG_ACTION, registerSaga);
  yield takeLatest(ACTION.TEST, sendTestSaga);
}

export default rootSaga;

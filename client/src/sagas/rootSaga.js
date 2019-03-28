import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga, registerSaga, getUserSaga
} from './userSaga';
import {getUserContestsSaga} from './contestSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REG_ACTION, registerSaga);
  yield takeLatest(ACTION.GET_USER, getUserSaga);
  yield takeLatest(ACTION.GET_USER_CONTESTS, getUserContestsSaga);
}

export default rootSaga;

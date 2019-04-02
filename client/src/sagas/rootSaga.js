import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga, registerSaga, getUserSaga
} from './userSaga';
import {getUserContestsSaga, getContestTypesSaga, getIndustriesSaga, getNameTypesSaga,
  getStylesSaga} from './contestSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REG_ACTION, registerSaga);
  yield takeLatest(ACTION.GET_USER, getUserSaga);
  yield takeLatest(ACTION.GET_USER_CONTESTS, getUserContestsSaga);
  yield takeLatest(ACTION.GET_CONTEST_TYPES, getContestTypesSaga);
  yield takeLatest(ACTION.GET_NAME_TYPES, getNameTypesSaga);
  yield takeLatest(ACTION.GET_INDUSTRIES, getIndustriesSaga);
  yield takeLatest(ACTION.GET_STYLES, getStylesSaga);

}

export default rootSaga;

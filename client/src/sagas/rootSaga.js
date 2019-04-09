import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  loginSaga, registerSaga, getUserSaga, logoutSaga
} from './userSaga';
import {getUserContestsSaga, getContestTypesSaga, getIndustriesSaga, getNameTypesSaga,
  getStylesSaga, createContestSaga, proceedPaySaga, updateContestSaga} from './contestSaga';
import {setAllEntriesSaga, setRejectedEntriesSaga, updateAcceptedEntrySaga, updateRejectedEntrySaga} from './entriesSaga';

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_ACTION, loginSaga);
  yield takeLatest(ACTION.REG_ACTION, registerSaga);
  yield takeLatest(ACTION.GET_USER, getUserSaga);
  yield takeLatest(ACTION.GET_USER_CONTESTS, getUserContestsSaga);
  yield takeLatest(ACTION.GET_CONTEST_TYPES, getContestTypesSaga);
  yield takeLatest(ACTION.GET_NAME_TYPES, getNameTypesSaga);
  yield takeLatest(ACTION.GET_INDUSTRIES, getIndustriesSaga);
  yield takeLatest(ACTION.GET_STYLES, getStylesSaga);
  yield takeLatest(ACTION.CREATE_CONTEST, createContestSaga);
  yield takeLatest(ACTION.PROCEED_PAY, proceedPaySaga);
  yield takeLatest(ACTION.USER_LOGOUT,logoutSaga);
  yield takeLatest(ACTION.SET_ALL_ENTRIES, setAllEntriesSaga);
  yield takeLatest(ACTION.SET_REJECTED_ENTRIES, setRejectedEntriesSaga);
  yield takeLatest(ACTION.UPDATE_ENTRY_ACCEPTED, updateAcceptedEntrySaga);
  yield takeLatest(ACTION.UPDATE_ENTRY_REJECTED, updateRejectedEntrySaga);
  yield takeLatest(ACTION.UPDATE_CONTEST, updateContestSaga);
}

export default rootSaga;

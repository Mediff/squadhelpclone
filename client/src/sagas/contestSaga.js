
import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getUserContests, getContestTypes} from "../api/rest/restContoller";

export function* getUserContestsSaga() {
    yield put({type: ACTION.GET_USER_CONTESTS_REQUEST});
    try {
        const {data} = yield getUserContests();
        yield put({type: ACTION.GET_USER_CONTESTS_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_USER_CONTESTS_ERROR, error: e});
    }
}

export function * getContestTypesSaga() {
    yield put({type: ACTION.GET_CONTEST_TYPES_REQUEST});
    try {
        const {data} = yield getContestTypes();
        yield put({type: ACTION.GET_CONTEST_TYPES_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_CONTEST_TYPES_ERROR, error: e});
    }
}

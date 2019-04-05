import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getUserContests, getContestTypes, getIndustries, getStyles, getNameTypes, createContest, uploadFile, proceedPay}
    from "../api/rest/restContoller";

export function* getUserContestsSaga() {
    yield put({type: ACTION.GET_USER_CONTESTS_REQUEST});
    try {
        const {data} = yield getUserContests();
        yield put({type: ACTION.GET_USER_CONTESTS_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_USER_CONTESTS_ERROR, error: e});
    }
}

export function* getContestTypesSaga() {
    yield put({type: ACTION.GET_CONTEST_TYPES_REQUEST});
    try {
        const {data} = yield getContestTypes();
        yield put({type: ACTION.GET_CONTEST_TYPES_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_CONTEST_TYPES_ERROR, error: e});
    }
}

export function* getIndustriesSaga() {
    yield put({type: ACTION.GET_INDUSTRIES_REQUEST});
    try {
        const {data} = yield getIndustries();
        yield put({type: ACTION.GET_INDUSTRIES_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_INDUSTRIES_ERROR, error: e});
    }
}

export function* getStylesSaga() {
    yield put({type: ACTION.GET_STYLES_REQUEST});
    try {
        const {data} = yield getStyles();
        yield put({type: ACTION.GET_STYLES_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_STYLES_ERROR, error: e});
    }
}

export function* getNameTypesSaga() {
    yield put({type: ACTION.GET_NAME_TYPES_REQUEST});
    try {
        const {data} = yield getNameTypes();
        yield put({type: ACTION.GET_NAME_TYPES_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_NAME_TYPES_ERROR, error: e});
    }
}

const uploadImage = async (file) => {
    return await uploadFile(file);
};

export function* createContestSaga({payload}) {
    yield put({type: ACTION.CREATE_CONTEST_REQUEST});
    try {
        const {contest} = payload;
        if(contest.file){
            const response = yield call(uploadImage, contest.file);
            contest.file = response.data;
        }
        const {data} = yield createContest(contest);
        yield put({type: ACTION.CREATE_CONTEST_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.CREATE_CONTEST_ERROR, error: e});
    }
}

export function* proceedPaySaga({payload}) {
    yield put({type: ACTION.PROCEED_PAY_REQUEST});
    try {
        const {data} = yield proceedPay(payload);
        yield put({type: ACTION.PROCEED_PAY_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.PROCEED_PAY_ERROR, error: e});
    }
}
import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getUserContests, getContestTypes, getIndustries, getStyles, getNameTypes, createContest, uploadFile, proceedPay,
updateContest, getCombinedTypes}
    from '../api/rest/restContoller';
import {clearContests, setTypeId} from '../utils/localStorage/localStorage';

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
        const {contest, contestTypes} = payload;
        if(contest.file){
            const response = yield call(uploadImage, contest.file);
            contest.file = response.data;
        }
        const {data} = yield createContest(contest);
        const selectedTypes = contestTypes;
        selectedTypes && selectedTypes.shift();
        setTypeId(selectedTypes);
        yield put({type: ACTION.CREATE_CONTEST_RESPONSE, payload: selectedTypes});
        yield put({type: ACTION.SET_SAVED_CONTEST, payload: data});
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

export function* updateContestSaga ({payload}) {
    yield put({type: ACTION.UPDATE_CONTEST_REQUEST});
    try {
        const {data} = yield updateContest(payload);
        yield put({type: ACTION.UPDATE_CONTEST_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.UPDATE_CONTEST_ERROR, error: e});
    }
}

export function* setContestTypeSaga ({payload}) {
    const id = Array.isArray(payload)? payload : [payload];
    setTypeId(id);
    clearContests();
    yield put({type: ACTION.SET_STEPS, payload: id.length + 2});
    yield put({type: ACTION.SET_CONTEST_TYPES_RESPONSE, payload: id});
}

export function* getCombinedTypesSaga ({}) {
    try {
        const {data} = yield getCombinedTypes();
        yield put({type: ACTION.GET_COMBINED_TYPES_RESPONSE, payload:data});
    } catch (e) {
        yield put({type: ACTION.GET_COMBINED_TYPES_ERROR, error: e});
    }
}
import ACTION from '../actions/actiontsTypes';
import {put, call} from 'redux-saga/effects';
import {updateEntry} from "../api/rest/restContoller";

export function* setAllEntriesSaga({payload}) {
    const entries = payload.Entries;
    yield put({
        type: ACTION.SET_ALL_ENTRIES_RESPONSE,
        payload: entries
    });
}

export function* setRejectedEntriesSaga({payload}) {
    const entries = payload.Entries;
    const filteredEntries = entries.filter(entry=> entry.isRejected);
    yield put({
        type: ACTION.SET_REJECTED_ENTRIES_RESPONSE,
        payload: filteredEntries
    });
}

export function* updateEntryStatusSaga() {
    try {
        const {data} = yield updateEntry();
        yield put({type: ACTION.UPDATE_ENTRY_STATUS_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_CONTEST_TYPES_ERROR, error: e});
    }
}


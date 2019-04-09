import ACTION from '../actions/actiontsTypes';
import {put} from 'redux-saga/effects';
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

export function* updateRejectedEntrySaga({payload}) {
    try {
        const {entry, prize} = payload;
        entry.isWinner = false;
        const {data} = yield updateEntry({entry, prize});
        yield put({type: ACTION.UPDATE_ENTRY_REJECTED_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_CONTEST_TYPES_ERROR, error: e});
    }
}


export function* updateAcceptedEntrySaga({payload}) {
    try {
        const {entry, prize} = payload;
        entry.isWinner = true;
        const {data} = yield updateEntry({entry, prize});
        yield put({type: ACTION.UPDATE_ENTRY_ACCEPTED_RESPONSE, payload: data});
    } catch (e) {
        yield put({type: ACTION.GET_CONTEST_TYPES_ERROR, error: e});
    }
}

import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedEntries: [],
    userEntries: null,
    userEntriesError: null,
    userEntriesIsFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_REJECTED_ENTRIES_RESPONSE: {
            return {
                ...state,
                selectedEntries: action.payload
            };
        }
        case ACTION.SET_ALL_ENTRIES_RESPONSE: {
            return {
                ...state,
                selectedEntries: action.payload
            };
        }
        case ACTION.UPDATE_ENTRY_ACCEPTED_RESPONSE:
        case ACTION.UPDATE_ENTRY_REJECTED_RESPONSE: {
            return {
                ...state,
                selectedEntries: action.payload
            }
        }
        case ACTION.GET_USER_ENTRIES_ERROR: {
            return {
                ...state,
                userEntries: null,
                userEntriesError: action.error,
                userEntriesIsFetching: false
            }
        }
        case ACTION.GET_USER_ENTRIES_REQUEST: {
            return {
                ...state,
                userEntries: null,
                userEntriesIsFetching: true,
                userEntriesError: null
            }
        }
        case ACTION.GET_USER_ENTRIES_RESPONSE: {
            return {
                ...state,
                userEntries: action.payload,
                userEntriesIsFetching: false,
                userEntriesError: null
            }
        }
        default: {
            return state;
        }
    }
}



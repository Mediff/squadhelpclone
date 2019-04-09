import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedEntries: []
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
            console.log(action.payload);
            return {
                ...state,
                selectedEntries: action.payload
            }
        }
        default: {
            return state;
        }
    }
}



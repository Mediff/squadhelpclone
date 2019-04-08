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

        default: {
            return state;
        }
    }
}



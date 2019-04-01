import ACTION from '../actions/actiontsTypes';

const initialState = {
    contestTypes: null,
    error: null,
    isFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_CONTEST_TYPES_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
                contestTypes: null
            }
        }
        case ACTION.GET_CONTEST_TYPES_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                contestTypes: action.payload
            }
        }
        case ACTION.GET_CONTEST_TYPES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                contestTypes: null
            }
        }
        default: {
            return state;
        }
    }
}
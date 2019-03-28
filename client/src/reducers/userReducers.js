/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
    currentUser: null,
    isFetching: false,
    error: null,
    tokenFailed: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                currentUser: action.payload
            };
        }
        case ACTION.REG_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                currentUser: action.payload
            };
        }
        case ACTION.LOGIN_REQUEST:
        case ACTION.REG_REQUEST: {
            return {
                ...state,
                error: null,
                isFetching: true,
            };
        }
        case ACTION.LOGIN_ERROR:
        case ACTION.REG_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        case ACTION.GET_USER_ERROR: {
            return {
                ...state,
                tokenFailed: true
            };
        }
        case ACTION.GET_USER_RESPONSE: {
            return {
                ...state,
                currentUser: action.payload
            };
        }
        default: {
            return state;
        }
    }
}



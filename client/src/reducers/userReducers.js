/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
    currentUser: null,
    isFetching: false,
    loginError: null,
    registerError: null,
    tokenFailed: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                loginError: null,
                currentUser: action.payload
            };
        }
        case ACTION.REG_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                registerError: null,
                currentUser: action.payload
            };
        }
        case ACTION.LOGIN_REQUEST: {
            return {
                ...state,
                loginError: null,
                isFetching: true,
            };
        }
        case ACTION.REG_REQUEST: {
            return {
                ...state,
                registerError: null,
                isFetching: false
            }
        }
        case ACTION.LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.error,
                isFetching: false,
                currentUser: null
            };
        }
        case ACTION.REG_ERROR: {
            return {
                ...state,
                registerError: action.error,
                isFetching: false,
                currentUser: null
            }
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
        case ACTION.USER_LOGOUT_RESPONSE: {
            return {
                ...state,
                currentUser: null
            };
        }
        default: {
            return state;
        }
    }
}



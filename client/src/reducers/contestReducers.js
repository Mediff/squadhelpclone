
import ACTION from '../actions/actiontsTypes';

const initialState = {
    userContests: null,
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_USER_CONTESTS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                userContests: action.payload
            }
        }
        case ACTION.GET_USER_CONTESTS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
                userContests: null
            }
        }
        case ACTION.GET_USER_CONTESTS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                userContests: null
            }
        }
        default: {
            return state;
        }
    }
}
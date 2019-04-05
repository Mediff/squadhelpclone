import ACTION from '../actions/actiontsTypes';

const initialState = {
    userContests: null,
    isFetching: false,
    error: null,
    getActive: true,
    payProceed: null,
    payProceedError: null,
    payProceedFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_USER_CONTESTS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null,
                userContests: action.payload,
                getActive: true
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
        case ACTION.GET_USER_ACTIVE_CONTESTS: {
            return {
                ...state,
                getActive: true
            }
        }
        case ACTION.GET_USER_COMPLETED_CONTESTS: {
            return {
                ...state,
                getActive: false
            }
        }
        case ACTION.PROCEED_PAY_REQUEST: {
            return {
                ...state,
                payProceed: null,
                payProceedError: null,
                payProceedFetching: true
            }
        }
        case ACTION.PROCEED_PAY_RESPONSE: {
            return {
                ...state,
                payProceed: action.payload,
                payProceedError: null,
                payProceedFetching: false
            }
        }
        case ACTION.PROCEED_PAY_ERROR: {
            return {
                ...state,
                payProceed: null,
                payProceedError: action.error,
                payProceedFetching: false
            }
        }
        default: {
            return state;
        }
    }
}
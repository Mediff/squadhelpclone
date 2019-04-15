import ACTION from '../actions/actiontsTypes';

const initialState = {
    userContests: null,
    userContestsFetching: false,
    userContestsError: null,
    activeContests: null,
    activeContestsFetching: false,
    activeContestsError: null,
    getActive: true,
    payProceed: null,
    payProceedError: null,
    payProceedFetching: false,
    selectedContest: null,
    updateSuccess: null,
    updateError: null,
    getUserEntries: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_USER_CONTESTS_RESPONSE: {
            return {
                ...state,
                userContestsFetching: false,
                userContestsError: null,
                userContests: action.payload,
                getActive: true
            }
        }
        case ACTION.GET_USER_CONTESTS_REQUEST: {
            return {
                ...state,
                userContestsFetching: true,
                userContestsError: null,
                userContests: null
            }
        }
        case ACTION.GET_USER_CONTESTS_ERROR: {
            return {
                ...state,
                userContestsFetching: false,
                userContestsError: action.error,
                userContests: null
            }
        }
        case ACTION.SET_USER_ACTIVE_CONTESTS: {
            return {
                ...state,
                getActive: true
            }
        }
        case ACTION.SET_USER_COMPLETED_CONTESTS: {
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
        case ACTION.SET_CONTEST: {
            return {
                ...state,
                selectedContest: action.payload
            }
        }
        case ACTION.UPDATE_CONTEST_RESPONSE: {
            return {
                ...state,
                selectedContest: action.payload,
                updateSuccess: true,
                updateError: null
            }
        }
        case ACTION.UPDATE_CONTEST_ERROR: {
            return {
                ...state,
                updateSuccess: null,
                updateError: action.error
            }
        }
        case ACTION.GET_ALL_ACTIVE_CONTESTS_REQUEST: {
            return {
                ...state,
                activeContests: null,
                activeContestsFetching: true,
                activeContestsError: null
            }
        }
        case ACTION.GET_ALL_ACTIVE_CONTESTS_RESPONSE: {
            return {
                ...state,
                activeContests: action.payload,
                activeContestsFetching: false,
                activeContestsError: null
            }
        }
        case ACTION.GET_ALL_ACTIVE_CONTESTS_ERROR: {
            return {
                ...state,
                activeContests: null,
                activeContestsFetching: false,
                activeContestsError: action.error
            }
        }
        case ACTION.SET_USER_ENTRIES: {
            return {
                ...state,
                getUserEntries: true
            }
        }
        case ACTION.SET_ALL_ACTIVE_CONTESTS: {
            return {
                ...state,
                getUserEntries: false
            }
        }
        default: {
            return state;
        }
    }
}
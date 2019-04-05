import ACTION from '../actions/actiontsTypes';

const initialState = {
    contestTypes: null,
    contestTypesError: null,
    contestTypesFetching: false,
    selectedContestType: null,
    industries: null,
    industriesError: null,
    industriesFetching: null,
    styles: null,
    stylesError: null,
    stylesFetching: null,
    nameTypes: null,
    nameTypesError: null,
    nameTypesFetching: null,
    savedContest: null,
    savedContestError: null,
    savedContestFetching: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_CONTEST_TYPES_REQUEST: {
            return {
                ...state,
                contestTypesFetching: true,
                contestTypesError: null,
                contestTypes: null
            }
        }
        case ACTION.GET_STYLES_REQUEST: {
            return {
                ...state,
                stylesFetching: true,
                stylesError: null,
                styles: null
            }
        }
        case ACTION.GET_NAME_TYPES_REQUEST: {
            return {
                ...state,
                nameTypesFetching: true,
                nameTypesError: null,
                nameTypes: null
            }
        }
        case ACTION.GET_INDUSTRIES_REQUEST: {
            return {
                ...state,
                industriesFetching: true,
                industriesError: null,
                industries: null
            }
        }
        case ACTION.GET_CONTEST_TYPES_RESPONSE: {
            return {
                ...state,
                contestTypesFetching: false,
                contestTypesError: null,
                contestTypes: action.payload
            }
        }
        case ACTION.GET_STYLES_RESPONSE: {
            return {
                ...state,
                stylesFetching: false,
                stylesError: null,
                styles: action.payload
            }
        }
        case ACTION.GET_NAME_TYPES_RESPONSE: {
            return {
                ...state,
                nameTypesFetching: false,
                nameTypesError: null,
                nameTypes: action.payload
            }
        }
        case ACTION.GET_INDUSTRIES_RESPONSE: {
            return {
                ...state,
                industriesFetching: false,
                industriesError: null,
                industries: action.payload
            }
        }
        case ACTION.GET_CONTEST_TYPES_ERROR: {
            return {
                ...state,
                contestTypesFetching: false,
                contestTypesError: action.error,
                contestTypes: null
            }
        }
        case ACTION.GET_INDUSTRIES_ERROR: {
            return {
                ...state,
                industriesFetching: false,
                industriesError: action.error,
                industries: null
            }
        }
        case ACTION.GET_STYLES_ERROR: {
            return {
                ...state,
                stylesFetching: false,
                stylesError: action.error,
                styles: null
            }
        }
        case ACTION.GET_NAME_TYPES_ERROR: {
            return {
                ...state,
                nameTypesFetching: false,
                nameTypesError: action.error,
                nameTypes: null
            }
        }
        case ACTION.SET_CONTEST_TYPES: {
            return {
                ...state,
                selectedContestType: action.payload
            }
        }
        case ACTION.CREATE_CONTEST_RESPONSE: {
            const selectedTypes = this.state.selectedContestType;
            selectedTypes && selectedTypes.shift();
            return {
                ...state,
                savedContest: action.payload,
                selectedContestType: selectedTypes,
                savedContestError: null,
                savedContestFetching: false
            }
        }
        case ACTION.SET_SAVED_CONTEST: {
            return {
                ...state,
                savedContest: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
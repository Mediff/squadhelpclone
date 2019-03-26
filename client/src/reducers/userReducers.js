/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  currentUser: null,
  isFetching: false,
  error: null,
  isAuth: true
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
    case ACTION.IS_AUTH: {
      return {
        ...state,
        isAuth: false
      };
    }
    default: {
      return state;
    }
  }
}



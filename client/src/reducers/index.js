import { combineReducers } from 'redux';
import userReducers from './userReducers';
import contestReducers from './contestReducers';

const appReducer = combineReducers({
  userReducers, contestReducers
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;

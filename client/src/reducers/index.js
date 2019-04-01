import { combineReducers } from 'redux';
import userReducers from './userReducers';
import contestReducers from './contestReducers';
import contestTypesReducers from './contestTypesReducers';

const appReducer = combineReducers({
  userReducers, contestReducers, contestTypesReducers
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;

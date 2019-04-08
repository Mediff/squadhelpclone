import { combineReducers } from 'redux';
import userReducers from './userReducers';
import contestReducers from './contestReducers';
import contestTypesReducers from './contestTypesReducers';
import entriesReducers from './entriesReducers';

const appReducer = combineReducers({
  userReducers, contestReducers, contestTypesReducers, entriesReducers
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;

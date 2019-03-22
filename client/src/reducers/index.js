import { combineReducers } from 'redux';
import userReducers from './userReducers';

const appReducer = combineReducers({
  userReducers,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;

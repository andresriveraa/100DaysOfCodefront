import { combineReducers } from 'redux';

import userReducer from './userReducer'
import taskReducer from './taskReducer'
import postReducer from './postReducer'


export default combineReducers({
  userReducer,
  postReducer
  // taskReducer
});

import { combineReducers } from 'redux';
import notification from './notification.reducer';

const coreReducers = combineReducers({
  notification,
});

export default coreReducers;

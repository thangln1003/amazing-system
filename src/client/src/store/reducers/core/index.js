import { combineReducers } from 'redux';
import dialog from './dialog.reducer';
import notification from './notification.reducer';

const coreReducers = combineReducers({
  dialog,
  notification,
});

export default coreReducers;

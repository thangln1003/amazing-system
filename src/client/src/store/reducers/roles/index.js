import { combineReducers } from 'redux';
import roles from './roles.reducer';

const reducers = combineReducers({
  roles,
});

export default reducers;

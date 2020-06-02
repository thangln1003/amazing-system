import { combineReducers } from 'redux';
import role from './role.reducer';
import roles from './roles.reducer';

const reducers = combineReducers({
  role,
  roles,
});

export default reducers;

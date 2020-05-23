import { combineReducers } from 'redux';
import core from './core';
import gus from './roles';

const createReducer = (asyncReducers) =>
  combineReducers({
    core,
    gus,
    ...asyncReducers,
  });

export default createReducer;

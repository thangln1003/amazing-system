import { combineReducers } from 'redux';
import core from './core';

const createReducer = (asyncReducers) =>
  combineReducers({
    core,
    ...asyncReducers,
  });

export default createReducer;

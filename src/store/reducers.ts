import { combineReducers } from 'redux';
import currency from './currency/reducer';

const reducers = combineReducers({
  currency
});

export default reducers;

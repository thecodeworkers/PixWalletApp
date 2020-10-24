import { combineReducers } from 'redux';
import currency from './currency/reducer';
import theming from './theming/reducer';
import intermittence from './intermittence/reducer';

const reducers = combineReducers({
  currency,
  theming,
  intermittence
});

export default reducers;

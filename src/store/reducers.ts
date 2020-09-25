import { combineReducers } from 'redux';
import currency from './currency/reducer';
import theming from './theming/reducer';

const reducers = combineReducers({
  currency,
  theming
});

export default reducers;

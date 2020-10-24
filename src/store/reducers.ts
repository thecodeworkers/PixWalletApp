import { combineReducers } from 'redux';
import currency from './currency/reducer';
import theming from './theming/reducer';
import selectedCurrency from './selected-currency/reducer';
import intermittence from './intermittence/reducer';

const reducers = combineReducers({
  currency,
  theming,
  selectedCurrency,
  intermittence
});

export default reducers;

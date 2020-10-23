import { combineReducers } from 'redux';
import currency from './currency/reducer';
import theming from './theming/reducer';
import selectedCurrency from './selected-currency/reducer';

const reducers = combineReducers({
  currency,
  theming,
  selectedCurrency
});

export default reducers;

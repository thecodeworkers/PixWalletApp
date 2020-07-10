import { all, fork } from 'redux-saga/effects';
import { watchGetCurrencies } from './currency/saga';

export default function* () {
  yield all([
    fork(watchGetCurrencies)
  ])  
}

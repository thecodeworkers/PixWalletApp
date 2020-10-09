import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENCIES, GET_CURRENCIES_ASYNC } from './action-types';
import { actionObject } from '../../utils';
import { gql } from 'apollo-boost';
import { graphService } from '../../utils';

export function* getCurrenciesAsync() {
  try {
    const query = {
      query: gql`
        {
          currencies {
            name
            symbol
          }
        }
      `
    }

    const response = yield call(graphService, 'query', query);
    
    const { currencies } = response.data;
    
    yield put(actionObject(GET_CURRENCIES_ASYNC, { currencies }))
  } catch(error) {
    console.log(error);
  }
}

export function* watchGetCurrencies() {
  yield takeLatest(GET_CURRENCIES, getCurrenciesAsync);
}

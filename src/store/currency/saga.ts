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
          prices {
            currency
            price
          }
        }
      `
    }

    const response = yield call(graphService, 'query', query);
    
    // const { currencies } = response.data;
    const { prices } = response.data;
    
    yield put(actionObject(GET_CURRENCIES_ASYNC, { currencies: prices }))
  } catch(error) {
    console.log(error);
  }
}

export function* watchGetCurrencies() {
  yield takeLatest(GET_CURRENCIES, getCurrenciesAsync);
}

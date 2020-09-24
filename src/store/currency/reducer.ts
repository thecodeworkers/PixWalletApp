import { GET_CURRENCIES_ASYNC } from './action-types'
import { DispatchProps } from '../../types';

const initialState = {
  currencies: []
}

export default (state: any = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case GET_CURRENCIES_ASYNC:
    return { ...payload };

    default:
    return state;
  }
}

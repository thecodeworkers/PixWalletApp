import { SELECTED_CURRENCY } from './action-types'
import { DispatchProps } from '../../types';

const initialState = {
  currency: {}
}

export default (state: any = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case SELECTED_CURRENCY:
    return { currency: payload };

    default:
    return state;
  }
}

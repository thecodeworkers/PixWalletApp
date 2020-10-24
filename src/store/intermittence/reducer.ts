import { DispatchProps } from '../../types';
import { SHOW_COMPONENT } from './action-types';

const initialState = {
  modal: false
}

export default (state: any = initialState, { type, payload }: DispatchProps) => {
  console.log(payload);
  
  switch(type) {
    case SHOW_COMPONENT:
    return { modal: payload };

    default:
    return state;
  }
}

import { DispatchProps, Theming } from '../../types';
import { colors } from '../../assets';
import { SET_THEME } from './action-types';

const initialState: Theming = {
  theme: colors['light']
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case SET_THEME:
    return { theme: colors[payload] }

    default:
    return state;
  }
}

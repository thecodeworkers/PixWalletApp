import { SET_THEME } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../types';

export const setTheme = (theme: string): DispatchProps => actionObject(SET_THEME, theme);

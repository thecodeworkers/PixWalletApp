import { SELECTED_CURRENCY } from './action-types';
import { actionObject } from '../../utils';

export const selectCurrency = (param: any) => actionObject(SELECTED_CURRENCY, param);

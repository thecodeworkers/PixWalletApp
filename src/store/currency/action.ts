import { GET_CURRENCIES } from './action-types';
import { actionObject } from '../../utils';

export const getCurrencies = () => actionObject(GET_CURRENCIES);

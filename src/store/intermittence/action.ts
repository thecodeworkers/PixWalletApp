import { SHOW_COMPONENT } from './action-types';
import { actionObject } from '../../utils';

export const showComponent = (param: any) => actionObject(SHOW_COMPONENT, param);
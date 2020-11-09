import { DefaultProps } from '../../../types';

export type CurrencyProps = {
  currency: any,
} & DefaultProps;

export type GeneralProps = {
  action: any,
  navigation: any
} & CurrencyProps

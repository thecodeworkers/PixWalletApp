import { DefaultProps  } from '../../../../../../types';

export type RedirectProps = {
  action?: any
  selectedCurrency?: any,
  data: any,
  reset: () => void
} & DefaultProps;

export type ReducerProps = {
  selectedCurrency: any
} & DefaultProps;

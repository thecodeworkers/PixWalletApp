import { Theming } from  '../../types';

export type TabsProps = {
  fiat?: () => void,
  crypto?: () => void,
  selectedTab?: number
} & Theming;

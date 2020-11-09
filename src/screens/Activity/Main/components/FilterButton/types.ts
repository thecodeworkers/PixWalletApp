import { Theming } from '../../../../../types';
import { ActivityButtonFilterProps } from '../types';

export type FilterButtonProps = {
  onPress: () => void
} & Theming & ActivityButtonFilterProps

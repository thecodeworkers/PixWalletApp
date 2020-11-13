import { Theming } from '../../../../types';

export type ListItemProps = {
  index: number
  item: any
  showTopLine?: boolean
  onPress: (index: number) => void
} & Theming

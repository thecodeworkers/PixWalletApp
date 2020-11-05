import { Theming } from '../../../../../types';

export type WhitelistItemProps = {
  index: number
  item: any
  onPress: (index: number) => void
} & Theming

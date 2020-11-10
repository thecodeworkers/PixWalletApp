import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FilterButtonProps } from './types';
import { i18n } from '../../../../../utils';
import styles from './styles';

const FilterButton: FC<FilterButtonProps> = ({ theme, title, titleColor = null, buttonWidth = '22%', backgroundButton = null, opacity = 0.2, onPress  }) => (
  <TouchableOpacity
    style={[
      styles.buttonBody,
      {
        backgroundColor: backgroundButton ? backgroundButton : theme.background,
        width: buttonWidth
      }
    ]}
    onPress={onPress}
    activeOpacity={opacity}
  >
    <Text style={[ styles.buttonTitle, { color: titleColor ? titleColor : theme.tabsTitleClear }]}>{i18n.t(title)}</Text>
  </TouchableOpacity>
);

export default FilterButton;

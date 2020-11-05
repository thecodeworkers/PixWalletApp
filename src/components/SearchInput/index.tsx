import React, { FC} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TextInput } from 'react-native';
import { Theming } from '../../types';

const SearchInput: FC<Theming> = ({ theme }) => {
  return (
    <View style={styles.inputParent}>
      <TextInput
        style={[styles.input, { borderColor: theme.defaultActiveIcon }]}
        placeholder='Search'
        placeholderTextColor={theme.veryLightGrey}
      />
      <Icon
        name='search'
        color={theme.veryLightGrey}
        size={26}
        style={styles.icon}
      />
    </View>
  )
};

export default SearchInput;

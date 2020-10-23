import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import { ActivityButtonFilterProps } from '../types';
import { Theming } from '../../../../../../types';
import FilterButton from '../FilterButton';
import styles from './styles';

const buttons = [
  {
    title: 'all',
    buttonWidth: '20%'
  },
  {
    title: 'deposit'
  },
  {
    title: 'withdraw'
  },
  {
    title: 'exchange',
    buttonWidth: '24%'
  }
]

const ActivityFilter: FC<Theming> = ({ theme }) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      {
        buttons.map((button, index) => {
          let buttonProps: ActivityButtonFilterProps = { ...button };

          if(index == selected) {
            buttonProps = {
              ...button,
              backgroundButton: '#EBEBEB',
              titleColor: '#35A7D6',
              opacity: 1
            }
          }

          return (
            <FilterButton key={index} theme={theme} {...buttonProps} onPress={() => setSelected(index)}/>
          )
        })
      }
    </View>
  );
}

export default memo(ActivityFilter);

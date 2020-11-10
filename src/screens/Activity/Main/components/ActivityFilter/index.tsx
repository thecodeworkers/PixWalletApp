import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import { ActivityButtonFilterProps } from '../types';
import FilterButton from '../FilterButton';
import styles from './styles';
import { ActivityFilterProps } from './types';

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

const ActivityFilter: FC<ActivityFilterProps> = ({ theme, filterResult }) => {
  const [selected, setSelected] = useState(0);

  const changeTab = (index: number) => {
    setSelected(index);
    filterResult(buttons[index].title);
  }

  return (
    <View style={styles.container}>
      {
        buttons.map((button, index) => {
          let buttonProps: ActivityButtonFilterProps = { ...button };

          if(index == selected) {
            buttonProps = {
              ...button,
              backgroundButton: theme.whirspersInactive,
              titleColor: theme.tabsTitle,
              opacity: 1
            }
          }

          return (
            <FilterButton key={index} theme={theme} {...buttonProps} onPress={() => changeTab(index)}/>
          )
        })
      }
    </View>
  );
}

export default memo(ActivityFilter);
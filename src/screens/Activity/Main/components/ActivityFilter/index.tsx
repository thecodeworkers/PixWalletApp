import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import { ActivityButtonFilterProps } from '../types';
import { ActivityFilterProps } from './types';
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

const ActivityFilter: FC<ActivityFilterProps> = ({ theme, filterResult }) => {
  const [selected, setSelected] = useState(0);

  const changeTab = (index: number) => {
    setSelected(index);
    filterResult(buttons[index].title);
  }

  return (
    <View style={styles.container}>
      <View style={{
        width: 5,
        height: 5,
        backgroundColor: theme.tabsTitle,
        position: 'absolute',
        bottom: '75%',
        left: selected == 0 ? '9%' :
              selected == 1 ? '34%' :
              selected == 2 ? '60%' :
              selected == 3 ? '86.5%' :
              '9%',
        borderRadius: 10
      }} />
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

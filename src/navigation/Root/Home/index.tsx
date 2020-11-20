import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from '../../../screens';
import { ActivityStack, ExchangeStack, PortfolioStack } from './Stacks';
import { Theming } from '../../../types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Tab = createBottomTabNavigator();

const HomeNavigator: FC<Theming> = ({ theme }) => {

  const setColor = (focused: boolean): string => {
    const { defaultActiveIcon, defaultInactiveIcon } = theme;
    return focused ? defaultActiveIcon : defaultInactiveIcon
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.defaultActiveIcon,
        tabStyle: { backgroundColor: theme.background, ...styles.tabStyles},
        style: { ...styles.main },
        showLabel: false,
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name="portfolio"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="dashboard" color={setColor(focused)} size={30} />
          )
        }}
      >
        { props => <PortfolioStack {...props} theme={theme} /> }
      </Tab.Screen>
      <Tab.Screen
        name="activity"
        options={{
          tabBarIcon: ({ focused }) => (
            <IonicIcon name="document-text" color={setColor(focused)} size={30} />
          )
        }}
      >
        { props => <ActivityStack {...props} theme={theme} /> }
      </Tab.Screen>
      <Tab.Screen
        name="exchange"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="compare-arrows" color={setColor(focused)} size={33} />
          )
        }}
      >
        { props => <ExchangeStack {...props} theme={theme} /> }
      </Tab.Screen>
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="person" color={setColor(focused)} size={32} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigator;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Activity, Exchange, Profile } from '../../../screens';
import { PortfolioStack } from './Stacks';

const Tab = createBottomTabNavigator();

const HomeNavigator = ({ theme }: any) => {
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
      }}
    >
      <Tab.Screen
        name="portfolio"
        component={PortfolioStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="dashboard" color={setColor(focused)} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <IonicIcon name="document-text-outline" color={setColor(focused)} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="exchange"
        component={Exchange}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="compare-arrows" color={setColor(focused)} size={33} />
          )
        }}
      />
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

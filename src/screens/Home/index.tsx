import React from 'react';
import Portfolio from '../Portfolio';
import Activity from '../Activity';
import Exchange from '../Exchange';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultProps } from '../../types';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();

const Home = ({ theming: { theme }}: any) => {

  const setColor = (focused: boolean): string => {
    const { defaultActiveIcon, defaultInactiveIcon } = theme;
    return focused ? defaultActiveIcon : defaultInactiveIcon
  }

  const ActivityWithColor = () => <Activity theme={theme} />

  return (
    <Tab.Navigator
      tabBarOptions={
        {
          activeTintColor: theme.defaultActiveIcon,
          tabStyle: { backgroundColor: theme.background, ...styles.tabStyles},
          style: { ...styles.main },
          showLabel: false,
        }
      }
    >
      <Tab.Screen
        name="portfolio"
        component={Portfolio}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <Icon name="dashboard" color={setColor(focused)} size={30} />
            ),
          }}
      />
      <Tab.Screen
        name="activity"
        component={ActivityWithColor}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <IonicIcon name="document-text-outline" color={setColor(focused)} size={30} />
            ),
          }}
      />
      <Tab.Screen
        name="exchange"
        component={Exchange}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <Icon name="compare-arrows" color={setColor(focused)} size={33} />
            ),
          }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <Icon name="person" color={setColor(focused)} size={32} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Home);

import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../Portfolio';
import Activity from '../Activity';
import Exchange from '../Exchange';
import Profile from '../Profile';
import General from '../../assets/colors/general';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { DefaultProps } from '../../types';
import styles from './style';
import { connect } from 'react-redux';

const Home = ({ theming: { theme }}: any) => {

  const Tab = createBottomTabNavigator(); 
  const { whiteSmoke, summerSky, veryLightGrey } = General;

  return (
    <Tab.Navigator
      tabBarOptions={
        {
          activeTintColor: summerSky,
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
              <Icon name="dashboard" color={focused ? theme.defaultActiveIcon : theme.defaultInactiveIcon} size={30} />
            ),
          }}
      />

      <Tab.Screen
        name="activity"
        component={Activity}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <IonicIcon name="document-text-outline" color={focused ? theme.defaultActiveIcon : theme.defaultInactiveIcon} size={30} />
            ),
          }}
      />

      <Tab.Screen
        name="exchange"
        component={Exchange}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <Icon name="compare-arrows" color={focused ? theme.defaultActiveIcon : theme.defaultInactiveIcon} size={33} />
            ),
          }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <Icon name="person" color={focused ? theme.defaultActiveIcon : theme.defaultInactiveIcon} size={32} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

// const mapDispatchToProps = (dispatch: any) => {
// 	const actions = {
// 		setTheme
// 	}

// 	return {
// 		action: bindActionCreators(actions, dispatch)
// 	}
// }

export default connect(mapStateToProps)(Home);


// export default Home;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../Portfolio';
import Activity from '../Activity';
import Exchange from '../Exchange';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="portfolio" component={Portfolio} />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="exchange" component={Exchange} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>      
  );
}

export default Home;

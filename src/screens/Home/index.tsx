import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../Portfolio';
import Activity from '../Activity';
import Exchange from '../Exchange';
import Profile from '../Profile';
<<<<<<< HEAD
import General from '../../assets/colors/general'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const { whiteSmoke, summerSky } = General;

const Home = () => {
  return (
    <Tab.Navigator tabBarOptions={
      {
        activeTintColor: summerSky,
        tabStyle: { backgroundColor: whiteSmoke },
        style: { borderTopWidth: 0 },
      }
    }
    >
      <Tab.Screen

        name="portfolio"
        options={{

        }}
        component={Portfolio} />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="exchange" component={Exchange} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
=======

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="portfolio" component={Portfolio} />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="exchange" component={Exchange} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>      
>>>>>>> e276e8561950e19d24da2a5528df843659d993a7
  );
}

export default Home;

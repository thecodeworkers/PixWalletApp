import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../Portfolio';
import Activity from '../Activity';
import Exchange from '../Exchange';
import Profile from '../Profile';
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
  );
}

export default Home;

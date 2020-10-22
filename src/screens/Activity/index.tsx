import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Detail } from './components';
import { Header } from '../../components';
import { View } from 'react-native';

const Stack = createStackNavigator();

const Activity: FC<any> = ({ theme }) => (
  <Stack.Navigator
    initialRouteName="main"
    screenOptions={{
      header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title: any =
          options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        return (
          <View style={{ backgroundColor: theme.background }}>
            <Header
              navigation={navigation}
              theme={theme}
              hasRightIcon={false}
              hasLeftIcon={previous ? true : false}
              title={title}
            />
          </View>
        )
      }
    }}
  >
    <Stack.Screen
      name="main"
      component={Main}
      options={{
        title: 'activity'
      }}
    />
    <Stack.Screen
      name="detail"
      component={Detail}
      options={{
        title: 'transaction_details'
      }}
    />
  </Stack.Navigator>
)

export default Activity;

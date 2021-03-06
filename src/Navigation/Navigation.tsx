import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SplashScreen,
  PlayersInformationScreen,
  PlayersWinAddScreen,
  WinnerScreen,
} from '../Screens';

// eslint-disable-next-line no-unused-vars
import { TypeStackParamList } from './navigationTypes';

const Stack = createStackNavigator<TypeStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="PlayersInformationScreen"
          component={PlayersInformationScreen}
        />
        <Stack.Screen
          name="PlayersWinAddScreen"
          component={PlayersWinAddScreen}
        />
        <Stack.Screen name="WinnerScreen" component={WinnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

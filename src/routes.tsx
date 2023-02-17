import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './screens/Splash';
import { Home } from './screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Splash'}
      >
        <Screen name='Splash' component={Splash} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

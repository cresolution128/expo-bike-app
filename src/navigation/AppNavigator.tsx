import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Stepper from '../components/Stepper';

export type RootStackParamList = {
  Home: undefined;
  Stepper: undefined
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Stepper" component={Stepper} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

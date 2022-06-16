import React from 'react';
import Home from '../pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

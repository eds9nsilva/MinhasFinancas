import React from 'react';
import Home from '../pages/Home';
import NewMovement from '../pages/NewMovement';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Home">
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="NewMovement"
        component={NewMovement}
        options={({navigation}) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={24}
              color="#ffffff"
              onPress={() =>
                navigation.reset({
                  routes: [
                    {
                      name: 'Home',
                    },
                  ],
                  index: 0,
                })
              }
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerTitle: 'Voltar',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: '#151515',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </App.Navigator>
  );
};

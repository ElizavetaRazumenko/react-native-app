import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { HomeNativeStackParamList } from 'src/navigation/types';

const HomeStack = createNativeStackNavigator<HomeNativeStackParamList>();

export const HomeNativeStackScreen: React.FC = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ title: 'News' }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{ title: 'Detail Name', headerBackTitle: 'Go back' }}
      initialParams={{ articleId: '' }}
    />
  </HomeStack.Navigator>
);

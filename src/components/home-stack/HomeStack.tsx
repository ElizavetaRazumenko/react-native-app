import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { HomeNativeStackParamList } from 'src/navigation/types';

const Stack = createNativeStackNavigator<HomeNativeStackParamList>();

export const HomeStack: React.FC = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{ title: 'News' }} />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
        headerBackTitle: 'Go back',
      })}
      initialParams={{ articleId: '', name: '' }}
    />
  </Stack.Navigator>
);

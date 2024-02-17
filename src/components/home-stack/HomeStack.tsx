import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'src/constants/navigation';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { HomeNativeStackParamList } from 'src/navigation/types';
import { Image, Pressable } from 'react-native';

const Stack = createNativeStackNavigator<HomeNativeStackParamList>();

export const HomeStack: React.FC = () => (
  <Stack.Navigator initialRouteName={HomeScreen.Home}>
    <Stack.Screen
      name={HomeScreen.Home}
      component={Home}
      options={{ title: 'News' }}
    />
    <Stack.Screen
      name={HomeScreen.Details}
      component={Details}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/arrow-back.png')}
              className="w-auto h-3"
            />
          </Pressable>
        ),
      })}
    />
  </Stack.Navigator>
);

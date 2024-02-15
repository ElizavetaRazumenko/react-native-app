import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { RootNativeStackParamList } from './types/types';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'News' }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

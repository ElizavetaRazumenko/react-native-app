import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PageStub } from './components/page-stub/PageStub';
import { HomeNativeStackScreen } from './components/home-native-stack-screen/HomeNativeStackScreen';
import { RootBottomTabParamList } from './navigation/types';

const queryClient = new QueryClient();

const RootTab = createBottomTabNavigator<RootBottomTabParamList>();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <RootTab.Navigator initialRouteName="HomeNativeStackScreen">
        <RootTab.Screen
          name="HomeNativeStackScreen"
          component={HomeNativeStackScreen}
          options={{ headerShown: false }}
        />
        <RootTab.Screen name="World" component={PageStub} />
        <RootTab.Screen name="Movables" component={PageStub} />
        <RootTab.Screen name="Realty" component={PageStub} />
        <RootTab.Screen name="Finance" component={PageStub} />
      </RootTab.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PageStub } from './components/page-stub/PageStub';
import { HomeStack } from './components/home-stack/HomeStack';
import { RootBottomTabParamList } from './navigation/types';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeStack">
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="World" component={PageStub} />
          <Tab.Screen name="Movables" component={PageStub} />
          <Tab.Screen name="Realty" component={PageStub} />
          <Tab.Screen name="Finance" component={PageStub} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </QueryClientProvider>
);

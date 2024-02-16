import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PageStub } from './components/page-stub/PageStub';
import { HomeStack } from './components/home-stack/HomeStack';
import { RootBottomTabParamList } from './navigation/types';
import { TabIcon } from './components/common/tab-icon/TabIcon';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeStack"
          screenOptions={{ tabBarLabel: '' }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon {...{ name: 'HomeStack', focused }} />
              ),
            }}
          />
          <Tab.Screen
            name="World"
            component={PageStub}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon {...{ name: 'World', focused }} />
              ),
            }}
          />
          <Tab.Screen
            name="Movables"
            component={PageStub}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon {...{ name: 'Movables', focused }} />
              ),
            }}
          />
          <Tab.Screen
            name="Realty"
            component={PageStub}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon {...{ name: 'Realty', focused }} />
              ),
            }}
          />
          <Tab.Screen
            name="Finance"
            component={PageStub}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon {...{ name: 'Finance', focused }} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </QueryClientProvider>
);

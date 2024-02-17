import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootScreen } from './constants/navigation';
import { STUB_PAGES_NAMES } from './constants/navigation';
import { SafeAreaInsets } from './components/common/safe-area-insets/SafeAreaInsets';
import { PageStub } from './components/page-stub/PageStub';
import { HomeStack } from './components/home-stack/HomeStack';
import { TabIcon } from './components/common/tab-icon/TabIcon';
import { RootBottomTabParamList } from './navigation/types';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <SafeAreaInsets>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={RootScreen.HomeStack}
            screenOptions={{ tabBarLabel: '' }}
          >
            <Tab.Screen
              name={RootScreen.HomeStack}
              component={HomeStack}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabIcon {...{ name: RootScreen.HomeStack, focused }} />
                ),
              }}
            />
            {STUB_PAGES_NAMES.map((pageName) => (
              <Tab.Screen
                name={pageName}
                key={pageName}
                component={PageStub}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabIcon {...{ name: pageName, focused }} />
                  ),
                }}
              />
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaInsets>
    </SafeAreaProvider>
  </QueryClientProvider>
);

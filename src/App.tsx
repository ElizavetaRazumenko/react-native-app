import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Sentry from '@sentry/react-native';
import * as amplitude from '@amplitude/analytics-react-native';
import { RootScreen } from './constants/navigation';
import { STUB_PAGES_NAMES } from './constants/navigation';
import { PageStub } from './components/page-stub/PageStub';
import { HomeStack } from './components/home-stack/HomeStack';
import { TabIcon } from './components/common/tab-icon/TabIcon';
import { RootBottomTabParamList } from './navigation/types';
import { AMPLITUDE_API_KEY, DSN_URL } from './constants/variables';

Sentry.init({
  dsn: DSN_URL,
});

amplitude.init(AMPLITUDE_API_KEY);
amplitude.track('Press');
amplitude.track('Scroll');

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export const App: React.FC = () => (
  <GestureHandlerRootView>
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <View className="container h-screen">
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
                    <TabIcon name={RootScreen.HomeStack} focused={focused} />
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
                      <TabIcon name={pageName} focused={focused} />
                    ),
                  }}
                />
              ))}
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </QueryClientProvider>
    </NativeBaseProvider>
  </GestureHandlerRootView>
);

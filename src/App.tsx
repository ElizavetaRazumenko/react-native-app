import React from 'react';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './components/home/Home';

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <View className="h-screen flex items-center justify-center">
      <Home />
    </View>
  </QueryClientProvider>
);

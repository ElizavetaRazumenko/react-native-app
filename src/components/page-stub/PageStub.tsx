import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaInsets } from '../common/safe-area-insets/SafeAreaInsets';

export const PageStub: React.FC = () => (
  <SafeAreaProvider>
    <SafeAreaInsets>
      <View className="flex items-center justify-center">
        <Text className="text-lg">Stub</Text>
      </View>
    </SafeAreaInsets>
  </SafeAreaProvider>
);

import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaInsets } from 'src/components/common/safe-area-insets/SafeAreaInsets';
import { StoryList } from './components/story-list/StoryList';

export const Home: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaInsets>
        <View
          className="h-screen flex items-center justify-center"
          testID="story-view"
        >
          <StoryList />
        </View>
      </SafeAreaInsets>
    </SafeAreaProvider>
  );
};

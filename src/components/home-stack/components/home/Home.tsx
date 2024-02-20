import React from 'react';
import { View } from 'react-native';
import { StoryList } from './components/story-list/StoryList';

export const Home: React.FC = () => {
  return (
    <View className="h-screen flex items-center justify-center">
      <StoryList />
    </View>
  );
};

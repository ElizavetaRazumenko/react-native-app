import React from 'react';
import { View } from 'react-native';
import { ArticleList } from './components/article-list/ArticleList';

export const Home: React.FC = () => {
  return (
    <View className="h-screen flex items-center justify-center">
      <ArticleList />
    </View>
  );
};

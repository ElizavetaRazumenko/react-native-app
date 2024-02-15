import React from 'react';
import { View } from 'react-native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArticleList } from './components/article-list/ArticleList';
// import { HomeNativeStackParamList } from '../../types';

// type Props = NativeStackScreenProps<HomeNativeStackParamList, 'Home'>;

export const Home: React.FC = () => (
  <View className="h-screen flex items-center justify-center">
    <ArticleList />
  </View>
);

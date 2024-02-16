import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArticleList } from './components/article-list/ArticleList';

export const Home: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={`
        h-screen
        flex
        items-center
        justify-center
        pt-[${insets.top}px]
        pr-[${insets.right}px]
        pb-[${insets.bottom}px]
        pl-[${insets.left}px]
      `}
    >
      <ArticleList />
    </View>
  );
};

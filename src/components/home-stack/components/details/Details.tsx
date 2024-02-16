import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from 'src/constants/navigation';
import { ArticleImage } from 'src/components/common/article-image/ArticleImage';
import { ArticleMetadata } from 'src/components/common/article-metadata/ArticleMetadata';
import { HomeNativeStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<
  HomeNativeStackParamList,
  HomeScreen.Details
>;

export const Details: React.FC<Props> = ({ route }) => {
  const insets = useSafeAreaInsets();
  const id = route.params.articleId;
  return (
    <View
      className={`
        container
        h-screen
        flex
        pt-[${insets.top}px]
        pr-[${insets.right}px]
        pb-[${insets.bottom}px]
        pl-[${insets.left}px]
  `}
    >
      <ArticleMetadata {...{ category: 'data.category', date: 'data.date' }} />
      <ArticleImage uri={'some uri'} />
      <Text>data.title</Text>
      <Text>data.content</Text>
    </View>
  );
};

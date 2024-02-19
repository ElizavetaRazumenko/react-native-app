import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from 'src/constants/navigation';
import { useDetails } from 'src/api/news/queries';
import { ArticleImage } from 'src/components/common/article-image/ArticleImage';
import { ArticleMetadata } from 'src/components/common/article-metadata/ArticleMetadata';
import { HomeNativeStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<
  HomeNativeStackParamList,
  HomeScreen.Details
>;

export const Details: React.FC<Props> = ({ route }) => {
  const { date, category, queryString, pictureUrl } = route.params;

  const { isPending, error, data } = useDetails(queryString);

  if (isPending) {
    return (
      <View className="h-screen container flex items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>;
  }

  return (
    <ScrollView className="container py-5 bg-white">
      {data ? (
        <>
          <View className="px-3.5">
            <ArticleMetadata category={category} date={date} />
          </View>
          <ArticleImage uri={pictureUrl} />
          <View className="px-3.5">
            <Text className="mt-5 mb-4 text-[28px] font-openSans font-bold">
              {data.title}
            </Text>
            <Text className="mb-10 italic font-openSans text-base">{`"${data.snippet}"`}</Text>
            <Text className="mb-10 font-openSans text-base">
              {data.content}
            </Text>
            <Text className="mb-10 font-openSans text-base">{data.source}</Text>
          </View>
        </>
      ) : (
        <Text>No results were found for your request</Text>
      )}
    </ScrollView>
  );
};

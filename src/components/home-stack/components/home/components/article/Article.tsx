import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ArticleMetadata } from 'src/components/common/article-metadata/ArticleMetadata';
import { ArticleItem } from 'src/api/news/types';

type Props = {
  data: ArticleItem;
};

export const Article: React.FC<Props> = ({ data }) => {
  const { navigate } = useNavigation();
  return (
    <View className="mb-5 bg-white shadow-lg">
      <TouchableOpacity
        onPress={() =>
          navigate('HomeStack', {
            screen: 'Details',
            params: {
              articleId: '',
              name: 'News title',
            },
          })
        }
      >
        <View className="container px-[15px] py-5">
          <ArticleMetadata {...{ category: data.category, date: data.date }} />
          <Text className="mb-5 text-xl font-openSans font-bold">
            {data.title}
          </Text>
          <Text className="text-base font-openSans">{data.content}</Text>
        </View>
        <FastImage
          className="w-full min-h-[280px]"
          source={{
            uri: data.pictureUrl,
            priority: FastImage.priority.high,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

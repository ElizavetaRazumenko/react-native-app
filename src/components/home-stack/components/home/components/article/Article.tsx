import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArticleMetadata } from 'src/components/common/article-metadata/ArticleMetadata';
import { ArticleImage } from 'src/components/common/article-image/ArticleImage';
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
        <ArticleImage uri={data.pictureUrl} />
      </TouchableOpacity>
    </View>
  );
};

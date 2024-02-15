import React from 'react';
import { Image, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNativeStackParamList } from 'src/navigation/types';

type Props = NativeStackScreenProps<HomeNativeStackParamList, 'Details'>;

export const Details: React.FC<Props> = ({ route }) => {
  const id = route.params.articleId;
  console.log(id);
  return (
    <View>
      <View className="flex flex-row justify-between items-center mb-5">
        <View className="bg-pink rounded">
          <Text className="py-1 px-2 text-base text-white font-openSans">
            data.category
          </Text>
        </View>
        <Text className="text-sm font-openSans">data.date</Text>
      </View>
      <Image
        className="w-full min-h-[280px]"
        source={{
          uri: 'data.pictureUrl',
        }}
      />
      <Text>data.title</Text>
      <Text>data.content</Text>
    </View>
  );
};

import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  category: string;
  date: string;
};

export const StoryMetadata: React.FC<Props> = ({ category, date }) => (
  <View className="container flex flex-row justify-between items-center mb-5">
    <View className="bg-pink rounded">
      <Text className="py-1 px-2 text-base text-white font-openSans">
        {category}
      </Text>
    </View>
    <Text className="text-sm font-openSans">{date}</Text>
  </View>
);

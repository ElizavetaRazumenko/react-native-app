import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeScreen, RootScreen } from 'src/constants/navigation';
import { StoryMetadata } from 'src/components/common/story-metadata/StoryMetadata';
import { StoryItem } from 'src/api/stories/types';
import { ImageCarousel } from 'src/components/common/image-carousel/ImageCarousel';

type Props = {
  data: StoryItem;
};

export const Story: React.FC<Props> = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <View className="mb-5 bg-white shadow-lg">
      <TouchableOpacity
        onPress={() =>
          navigate(RootScreen.HomeStack, {
            screen: HomeScreen.Details,
            params: {
              id: data.id,
            },
          })
        }
      >
        <View className="container px-[15px] py-5">
          <StoryMetadata category={data.category} date={data.date} />
          <Text className="mb-5 text-xl font-openSans font-bold">
            {data.title}
          </Text>
          <Text className="text-base font-openSans">{data.snippet}</Text>
        </View>
        <ImageCarousel picturesUrl={data.picturesUrl} />
      </TouchableOpacity>
    </View>
  );
};

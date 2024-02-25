import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { HomeScreen, RootScreen } from 'src/constants/navigation';
import { StoryMetadata } from 'src/components/common/story-metadata/StoryMetadata';
import { StoryImage } from 'src/components/common/story-image/StoryImage';
import { StoryItem } from 'src/api/stories/types';

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
        <View className="container h-max flex justify-center">
          {/* <Carousel
            loop
            width={100}
            height={100}
            autoPlay={true}
            data={data.picturesUrl}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => <StoryImage uri={item} />}
          /> */}
        </View>
        <StoryImage uri={data.picturesUrl[0]} />
      </TouchableOpacity>
    </View>
  );
};
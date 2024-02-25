import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { StoryImage } from '../story-image/StoryImage';

type Props = {
  picturesUrl: string[];
};

export const ImageCarousel: React.FC<Props> = ({ picturesUrl }) => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const windowWidth = useWindowDimensions().width;

  return (
    <View className="container flex justify-center">
      <Carousel
        loop
        width={windowWidth}
        height={280}
        autoPlay={true}
        defaultScrollOffsetValue={scrollOffsetValue}
        data={picturesUrl}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => <StoryImage uri={item} />}
      />
    </View>
  );
};

import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';

type Props = {
  uri: string;
};

export const StoryImage: React.FC<Props> = ({ uri }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <View className="container h-max flex justify-center">
      <FastImage
        onLoadEnd={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        className="w-full min-h-[280px]"
        source={{
          uri: uri,
          priority: FastImage.priority.high,
        }}
      />
      {isLoading && <ActivityIndicator size={'large'} />}
    </View>
  );
};

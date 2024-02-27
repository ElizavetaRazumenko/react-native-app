import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from 'src/constants/navigation';
import { useDetails } from 'src/api/stories/queries';
import { StoryMetadata } from 'src/components/common/story-metadata/StoryMetadata';
import { HomeNativeStackParamList } from 'src/navigation/types';
import { ImageCarousel } from 'src/components/common/image-carousel/ImageCarousel';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaInsets } from 'src/components/common/safe-area-insets/SafeAreaInsets';

type Props = NativeStackScreenProps<
  HomeNativeStackParamList,
  HomeScreen.Details
>;

export const Details: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  const { isPending, error, data } = useDetails(id);

  console.log(data?.title);

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
    <SafeAreaProvider>
      <SafeAreaInsets>
        <ScrollView className="container py-5 bg-white">
          {data ? (
            <>
              <View className="px-3.5">
                <StoryMetadata category={data.category} date={data.date} />
              </View>
              <ImageCarousel picturesUrl={data.picturesUrl} />
              <View className="px-3.5">
                <Text className="mt-5 mb-4 text-[28px] font-openSans font-bold">
                  {data.title}
                </Text>
                <Text className="mb-10 font-openSans text-base">
                  {data.content}
                </Text>
              </View>
            </>
          ) : (
            <Text>No results were found for your request</Text>
          )}
        </ScrollView>
      </SafeAreaInsets>
    </SafeAreaProvider>
  );
};

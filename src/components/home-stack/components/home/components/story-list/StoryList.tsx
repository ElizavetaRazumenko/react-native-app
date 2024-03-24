import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useStories } from 'src/api/stories/queries';
import { Story } from '../story/Story';

export const StoryList: React.FC = () => {
  const { isPending, error, data } = useStories();

  if (isPending) {
    return <ActivityIndicator testID="loading-indicator" />;
  }
  if (error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>;
  }

  return (
    <FlatList
      testID="stories-list"
      className="container"
      data={data}
      renderItem={({ item }) => <Story data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

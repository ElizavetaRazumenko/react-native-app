import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useNews } from '../../../../api/news/queries';
import { Article } from '../article/Article';

export const ArticleList: React.FC = () => {
  const { isPending, error, data } = useNews('arts');

  if (isPending) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>;
  }

  return (
    <FlatList
      className="container"
      data={data}
      renderItem={({ item }) => <Article data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

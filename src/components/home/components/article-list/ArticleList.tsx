import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useArts } from '../../hooks/useArts';
import { Article } from '../article/Article';

export const ArticleList: React.FC = () => {
  const { isPending, error, data } = useArts();

  if (isPending) return <ActivityIndicator />;
  if (error) return <Text>{`An error has occurred: ${error.message}`}</Text>;

  return (
    <FlatList
    className="container"
    data={data}
    renderItem={({item}) => <Article data={item} />}
    keyExtractor={item => item.id}
    />
  )
}

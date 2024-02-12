import React from 'react';
import { FlatList } from 'react-native';
import { Article } from '../article/Article';
import { ARTICLES_DATA } from './articles-data';

export const ArticleList: React.FC = () => 
    <FlatList
      className="container"
      data={ARTICLES_DATA}
      renderItem={({item}) => <Article data={item} />}
      keyExtractor={item => item.id}
    />

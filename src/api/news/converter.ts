import uuid from 'react-native-uuid';
import { ArticleItem, ArticleResponse } from './types';
import { getFullDate } from 'src/utils/date';

export const convertArticles = (data: ArticleResponse): ArticleItem[] =>
  data.results.map((result) => ({
    id: String(uuid.v4()),
    category: result.subsection || 'uncategorized',
    date: getFullDate(result.published_date),
    title: result.title,
    content: result.abstract,
    pictureUrl: result.multimedia[0].url,
  }));

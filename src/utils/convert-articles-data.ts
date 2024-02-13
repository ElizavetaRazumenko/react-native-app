import uuid from 'react-native-uuid';
import { ArticleConvertedData, ArticleResponseData } from '../api/news/types';
import { formatDate } from './format-date';

export const convertArticlesData = (
  data: ArticleResponseData,
): ArticleConvertedData[] =>
  data.results.map((result) => ({
    id: String(uuid.v4()),
    category: result.subsection || 'uncategorized',
    date: formatDate(result.published_date),
    title: result.title,
    content: result.abstract,
    pictureUrl: result.multimedia[0].url,
  }));

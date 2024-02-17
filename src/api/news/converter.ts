import uuid from 'react-native-uuid';
import {
  ArticleItem,
  ArticleResponse,
  DetailsItem,
  DetailsResponse,
} from './types';
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

export const convertDetails = (data: DetailsResponse): DetailsItem => {
  const details = data.response.docs[0];
  return {
    title: details.abstract,
    snippet: details.snippet,
    content: details.lead_paragraph,
    source: details.source,
  };
};

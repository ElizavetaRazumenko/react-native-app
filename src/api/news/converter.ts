import uuid from 'react-native-uuid';
import { getFullDate } from 'src/utils/date';
import { ArticleResponse, DetailsResponse } from './types';

export const convertArticles = (data: ArticleResponse) =>
  data.results.map((result) => ({
    id: String(uuid.v4()),
    category: result.subsection || 'uncategorized',
    date: getFullDate(result.published_date),
    title: result.title,
    content: result.abstract,
    pictureUrl: result.multimedia[0].url,
  }));

export const convertDetails = (data: DetailsResponse) => {
  const details = data.response.docs[0];

  return {
    title: details.abstract,
    snippet: details.snippet,
    content: details.lead_paragraph,
    source: details.source,
  };
};

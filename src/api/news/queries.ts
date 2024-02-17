import { useQuery } from '@tanstack/react-query';
import { fetchNews, searchArticleDetails } from './module';

const enum QueryKeys {
  NEWS = 'news',
  DETAILS = 'details',
}

export const useNews = (section: string) =>
  useQuery({
    queryKey: [QueryKeys.NEWS, section],
    queryFn: () => fetchNews(section),
  });

export const useDetails = (query: string) =>
  useQuery({
    queryKey: [QueryKeys.DETAILS, query],
    queryFn: () => searchArticleDetails(query),
  });

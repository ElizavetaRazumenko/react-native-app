import { useQuery } from '@tanstack/react-query';
import { fetchNews } from './module';

const enum QueryKeys {
  NEWS = 'news',
}

export const useNews = (section: string) =>
  useQuery({
    queryKey: [QueryKeys.NEWS, section],
    queryFn: () => fetchNews(section),
  });

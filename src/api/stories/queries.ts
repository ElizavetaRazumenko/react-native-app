import { useQuery } from '@tanstack/react-query';
import { fetchStories, getStoryDetails } from './module';

const enum QueryKeys {
  STORIES = 'stories',
  DETAILS = 'details',
}

export const useStories = () =>
  useQuery({
    queryKey: [QueryKeys.STORIES],
    queryFn: () => fetchStories(),
  });

export const useDetails = (id: string) =>
  useQuery({
    queryKey: [QueryKeys.DETAILS, id],
    queryFn: () => getStoryDetails(id),
  });

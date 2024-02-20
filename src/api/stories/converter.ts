import { HOST_ADDRESS } from 'src/constants/variables';
import { getFullDate } from 'src/utils/date';
import { StoriesResponse, DetailsResponse } from './types';

export const convertStories = (data: StoriesResponse) =>
  data.data.map((result) => ({
    id: `${result.id}`,
    category: result.attributes.category,
    date: getFullDate(result.attributes.date),
    title: result.attributes.title,
    snippet: result.attributes.snippet,
    content: result.attributes.content,
    pictureUrl: `${HOST_ADDRESS}${result.attributes.image.data.attributes.url}`,
  }));

export const convertDetails = (data: DetailsResponse) => {
  const details = data.data;

  return {
    id: `${details.id}`,
    category: details.attributes.category,
    date: getFullDate(details.attributes.date),
    title: details.attributes.title,
    snippet: details.attributes.snippet,
    content: details.attributes.content,
    pictureUrl: `${HOST_ADDRESS}${details.attributes.image.data.attributes.url}`,
  };
};

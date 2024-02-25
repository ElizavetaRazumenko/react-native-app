import { HOST_ADDRESS } from 'src/constants/variables';
import { getFullDate } from 'src/utils/date';
import { StoriesResponse, DetailsResponse, Imagedata } from './types';

const convertPicturesUrl = (urls: Imagedata[]) =>
  urls.map((url) => `${HOST_ADDRESS}${url.attributes.url}`);

export const convertStories = (data: StoriesResponse) =>
  data.data.map((result) => ({
    id: `${result.id}`,
    category: result.attributes.category,
    date: getFullDate(result.attributes.date),
    title: result.attributes.title,
    snippet: result.attributes.snippet,
    content: result.attributes.content,
    picturesUrl: convertPicturesUrl(result.attributes.image.data),
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
    picturesUrl: convertPicturesUrl(details.attributes.image.data),
  };
};
import {
  BASIC_URL,
  SEARCH_URL,
  TOP_STORIES_API_KEY,
} from 'src/constants/variables';
import { handleHttpError } from 'src/errors/http-error/handleHttpError';
import { convertArticles, convertDetails } from './converter';
import { handleResponse } from './handleResponse';

export const fetchNews = async (section: string) => {
  try {
    const response = await fetch(
      `${BASIC_URL}/${section}.json?api-key=${TOP_STORIES_API_KEY}`,
    );

    const newData = await handleResponse(response);

    return convertArticles(newData);
  } catch (error) {
    handleHttpError(error);
  }
};

export const searchArticleDetails = async (query: string) => {
  try {
    const encodeQuery = encodeURIComponent(query);
    const response = await fetch(
      `${SEARCH_URL}.json?fq=${encodeQuery}&api-key=${TOP_STORIES_API_KEY}`,
    );

    const newData = await handleResponse(response);

    if (newData.response?.docs?.length) {
      return convertDetails(newData);
    }

    return null;
  } catch (error) {
    handleHttpError(error);
  }
};

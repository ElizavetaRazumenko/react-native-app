import {
  BASIC_URL,
  SEARCH_URL,
  TOP_STORIES_API_KEY,
} from 'src/constants/variables';
import { convertArticles, convertDetails } from './converter';
import { HttpError } from 'src/errors/http-error/HttpError';
import { ArticleItem, DetailsItem } from './types';

export const fetchNews = async (
  section: string,
): Promise<ArticleItem[] | undefined> => {
  try {
    const response = await fetch(
      `${BASIC_URL}/${section}.json?api-key=${TOP_STORIES_API_KEY}`,
    );
    if (response.ok) {
      const newData = await response.json();
      return convertArticles(newData);
    }

    const errorMessage =
      response.status < 500 ? 'Client error' : 'Server error';

    throw new HttpError(
      `Request failed with a status: ${response.status}`,
      errorMessage,
      response.status,
    );
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    } else if (error instanceof Error && error.message === 'Failed to fetch') {
      throw new HttpError('Network error', error.message);
    } else {
      throw new HttpError('Unknown error', 'Something went wrong');
    }
  }
};

export const searchArticleDetails = async (
  query: string,
): Promise<DetailsItem | null | undefined> => {
  try {
    const encodeQuery = encodeURIComponent(query);
    const response = await fetch(
      `${SEARCH_URL}.json?fq=${encodeQuery}&api-key=${TOP_STORIES_API_KEY}`,
    );
    if (response.ok) {
      const newData = await response.json();
      if (newData.response?.docs?.length) {
        return convertDetails(newData);
      }
      return null;
    }

    const errorMessage =
      response.status < 500 ? 'Client error' : 'Server error';

    throw new HttpError(
      `Request failed with a status: ${response.status}`,
      errorMessage,
      response.status,
    );
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    } else if (error instanceof Error && error.message === 'Failed to fetch') {
      throw new HttpError('Network error', error.message);
    } else {
      throw new HttpError('Unknown error', 'Something went wrong');
    }
  }
};

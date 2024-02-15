import { BASIC_URL, TOP_STORIES_API_KEY } from 'src/constants/variables';
import { convertArticles } from './converter';
import { ArticleItem, HttpErrorType } from './types';

class HttpError extends Error implements HttpErrorType {
  constructor(message: string, public name: string, public statusCode = -1) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

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

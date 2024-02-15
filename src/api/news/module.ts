import { BASIC_URL, TOP_STORIES_API_KEY } from 'src/constants/variables';
import { convertArticles } from './converter';
import { ArticleItem, HttpErrorType } from './types';

class HttpError extends Error implements HttpErrorType {
  constructor(public name: string, message: string) {
    super(message);
    this.name = name;
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
    throw new Error(`Request failed with a status: ${response.status}`);
  } catch (error) {
    if (error instanceof Error) {
      throw error.message === 'Failed to fetch'
        ? new HttpError('Network error', error.message)
        : new HttpError('Server error', error.message);
    }
  }
};

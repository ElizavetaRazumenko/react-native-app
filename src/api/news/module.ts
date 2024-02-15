import { BASIC_URL, TOP_STORIES_API_KEY } from 'src/constants/variables';
import { convertArticles } from './converter';
import { ArticleItem } from './types';

export const fetchNews = async (
  section: string,
): Promise<ArticleItem[] | undefined> => {
  try {
    const response = await fetch(
      `${BASIC_URL}/${section}.json?api-key=${TOP_STORIES_API_KEY}`,
    );
    const newData = await response.json();
    return convertArticles(newData);
  } catch (error) {
    console.error(`Fetch operation failed: ${error}`);
  }
};

import { TOP_STORIES_PRODUCT_API_KEY } from '@env';
import { BASIC_URL } from '../../constants/variables';
import { convertArticlesData } from '../../utils/convert-articles-data';
import { ArticleConvertedData } from './types';

export const fetchNews = (section: string): Promise<ArticleConvertedData[]> =>
  fetch(`${BASIC_URL}/${section}.json?api-key=${TOP_STORIES_PRODUCT_API_KEY}`)
    .then((res) => res.json())
    .then((newData) => convertArticlesData(newData));

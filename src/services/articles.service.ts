import { TOP_STORIES_PRODUCT_API_KEY } from '@env';
import { BASIC_URL } from '../constants/constants';

export const articleService = {
  getArtsData: () => fetch(`${BASIC_URL}/arts.json?api-key=${TOP_STORIES_PRODUCT_API_KEY}`)
}
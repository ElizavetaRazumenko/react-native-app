import { API_BASE_URL, TOP_STORIES_PRODUCT_API_KEY } from '@env';
import { StubPageNames } from 'src/navigation/types';

export const BASIC_URL = `${API_BASE_URL}/svc/topstories/v2`;

export const TOP_STORIES_API_KEY = TOP_STORIES_PRODUCT_API_KEY;

export const STUB_PAGES_NAMES: StubPageNames[] = [
  'World',
  'Movables',
  'Realty',
  'Finance',
];

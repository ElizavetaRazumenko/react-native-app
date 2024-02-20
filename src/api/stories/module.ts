import { BASIC_URL } from 'src/constants/variables';
import { handleHttpError } from 'src/errors/http-error/handleHttpError';
import { convertStories, convertDetails } from './converter';
import { handleResponse } from './handleResponse';

export const fetchStories = async () => {
  try {
    const response = await fetch(`${BASIC_URL}?populate=*`);

    const newData = await handleResponse(response);

    return convertStories(newData);
  } catch (error) {
    handleHttpError(error);
  }
};

export const getStoryDetails = async (id: string) => {
  try {
    const response = await fetch(`${BASIC_URL}/${id}?populate=*`);

    const newData = await handleResponse(response);

    return convertDetails(newData);
  } catch (error) {
    handleHttpError(error);
  }
};

import { HttpError } from './HttpError';

export const handleHttpError = (error: unknown) => {
  if (error instanceof HttpError) {
    throw error;
  } else if (error instanceof Error && error.message === 'Failed to fetch') {
    throw new HttpError('Network error', error.message);
  } else {
    throw new HttpError('Unknown error', 'Something went wrong');
  }
};

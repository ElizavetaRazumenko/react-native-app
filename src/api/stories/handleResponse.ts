import { HttpError } from 'src/errors/http-error/HttpError';

export const handleResponse = async (response: Response) => {
  if (response.ok) {
    const newData = await response.json();

    return newData;
  }

  const errorMessage = response.status < 500 ? 'Client error' : 'Server error';

  throw new HttpError(
    `Request failed with a status: ${response.status}`,
    errorMessage,
    response.status,
  );
};

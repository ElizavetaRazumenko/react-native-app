import { HttpErrorType } from './types';

export class HttpError extends Error implements HttpErrorType {
  constructor(message: string, public name: string, public statusCode = -1) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

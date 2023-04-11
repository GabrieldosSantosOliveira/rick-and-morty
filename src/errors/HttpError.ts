export class HttpError {
  constructor(statusCode: number) {
    if (statusCode >= 400) {
      throw new Error();
    }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Options {
  data?: any;
}
export interface Response<T> {
  statusCode: number;
  data: T;
}
export interface HttpClient {
  get<T = any>(url: string): Promise<Response<T>>;
  delete<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>>;
  post<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>>;
  put<T = any>(url: string, options: Options | undefined): Promise<Response<T>>;
  patch<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>>;
}

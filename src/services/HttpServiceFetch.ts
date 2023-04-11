/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpError } from '@/errors';
import { IHttpService, Options, Response } from '@/interfaces';

export class HttpServiceFetch implements IHttpService {
  async get<T = any>(url: string): Promise<Response<T>> {
    const res = await fetch(url);
    new HttpError(res.status);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async delete<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'DELETE', body: options?.data });
    new HttpError(res.status);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async post<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'POST', body: options?.data });
    new HttpError(res.status);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async put<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'PUT', body: options?.data });
    new HttpError(res.status);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async patch<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'PATCH', body: options?.data });
    new HttpError(res.status);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
}

import { HttpClient, Options, Response } from '@/data/protocols/HttpClient';

export class FetchHttpAdapter implements HttpClient {
  async get<T = any>(url: string): Promise<Response<T>> {
    const res = await fetch(url);
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async delete<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'DELETE', body: options?.data });
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async post<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'POST', body: options?.data });
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async put<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'PUT', body: options?.data });
    const data = await res.json();
    return { data, statusCode: res.status };
  }
  async patch<T = any>(
    url: string,
    options: Options | undefined,
  ): Promise<Response<T>> {
    const res = await fetch(url, { method: 'PATCH', body: options?.data });
    const data = await res.json();
    return { data, statusCode: res.status };
  }
}

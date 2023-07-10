import { FetchHttpAdapter } from '@/infra/FetchHttpAdapter';

export const makeHttpClient = () => {
  const httpClient = new FetchHttpAdapter();
  return { httpClient };
};

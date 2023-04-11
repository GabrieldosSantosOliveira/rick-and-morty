import { IHttpService } from '@/interfaces';
import { HttpServiceFetch } from '@/services';
import { FC, ReactNode, createContext } from 'react';
export interface IServiceContext {
  httpService: IHttpService;
}
export const ServiceContext = createContext<IServiceContext>(
  {} as IServiceContext,
);
export interface IServiceProvider {
  children: ReactNode;
}
export const ServiceProvider: FC<IServiceProvider> = ({ children }) => {
  const httpServiceAxios = new HttpServiceFetch();
  return (
    <ServiceContext.Provider value={{ httpService: httpServiceAxios }}>
      {children}
    </ServiceContext.Provider>
  );
};

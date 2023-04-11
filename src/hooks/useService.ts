import { ServiceContext } from '@/contexts/ServiceContext';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';

export const useService = () => {
  const value = useContext(ServiceContext);
  if (!value) {
    throw new WithoutProviderError(
      'useService must be used within an ServiceProvider',
    );
  }
  return value;
};

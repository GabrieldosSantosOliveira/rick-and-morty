import { Characters } from '@/ui/screens/Characters';
import { makeHttpClient } from '../infra/MakeHttpClient';
import { GetCharactersByPageRepositoryImpl } from '@/infra/repositories/GetCharactersByPageRepositoryImpl';
import { GetCharactersByPageUseCaseImpl } from '@/data/use-cases/GetCharactersByPageUseCaseImpl';

export const MakeCharacters = () => {
  const { httpClient } = makeHttpClient();
  const getCharactersByPageRepositoryImpl =
    new GetCharactersByPageRepositoryImpl(httpClient);
  const getCharactersByPageUseCaseImpl = new GetCharactersByPageUseCaseImpl(
    getCharactersByPageRepositoryImpl,
  );
  return (
    <Characters getCharactersByPageUseCase={getCharactersByPageUseCaseImpl} />
  );
};

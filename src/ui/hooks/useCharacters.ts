import { useState } from 'react';

import { GetCharactersByPageUseCase } from '@/domain/use-cases/GetCharactersByPageUseCase';
import { Character } from '@/domain/entities/Character';

export const useCharacters = (
  getCharactersByPageUseCase: GetCharactersByPageUseCase,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  async function fetchCharacters() {
    try {
      if (!hasMoreData) return;
      const charactersOrError = await getCharactersByPageUseCase.execute(page);
      if (charactersOrError.isRight()) {
        const current = charactersOrError.value.characters.filter(
          (character) => !characters.includes(character),
        );
        setPage((prev) => prev + 1);
        setCharacters((prev) => {
          const characters = {} as { [key: number]: Character };
          [...prev, ...current].forEach((item) => {
            characters[item.id] = item;
          });
          return Object.values(characters);
        });
        if (!charactersOrError.value.info.next) {
          setHasMoreData(false);
        }
      }
      if (charactersOrError.isLeft()) {
        setHasMoreData(false);
      }
    } catch {
      setHasMoreData(false);
    } finally {
      setIsLoading(false);
    }
  }

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      setHasMoreData(true);
      setIsLoading(true);
      setPage(1);
      const charactersOrError = await getCharactersByPageUseCase.execute(1);
      if (charactersOrError.isRight()) {
        const current = charactersOrError.value.characters;
        setCharacters(current);
        if (charactersOrError.value.info.next) {
          setPage((prev) => prev + 1);
        } else {
          setHasMoreData(false);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  return {
    handleRefresh,
    isLoading,
    fetchCharacters,
    isRefreshing,
    hasMoreData,
    page,
    characters,
  };
};

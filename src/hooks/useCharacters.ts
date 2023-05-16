import { CharacterDto } from '@/models';
import { GetCharacters } from '@/services';
import { useState } from 'react';

import { useService } from './useService';

export const useCharacters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterDto[]>([]);

  const { httpService } = useService();
  const getCharacters = new GetCharacters(httpService);
  async function fetchCharacters() {
    try {
      if (!hasMoreData) return;
      const { data } = await getCharacters.getAllCharacters(page);
      const current = data.results.filter(
        (character) => !characters.includes(character),
      );
      setPage((prev) => prev + 1);
      setCharacters((prev) => {
        const characters = {} as { [key: number]: CharacterDto };
        [...prev, ...current].forEach((item) => {
          characters[item.id] = item;
        });
        return Object.values(characters);
      });
      if (!data.info.next) {
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
      const { data } = await getCharacters.getAllCharacters(1);
      const current = data.results;
      setCharacters(current);
      if (data.info.next) {
        setPage((prev) => prev + 1);
      } else {
        setHasMoreData(false);
      }
    } catch (error) {
      console.log(error);
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

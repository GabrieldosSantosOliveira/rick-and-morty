import { EpisodeDto } from '@/models';
import { GetEpisodes } from '@/services';
import { useState } from 'react';

import { useService } from './useService';

export const useEpisodes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [episodes, setEpisodes] = useState<EpisodeDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const { httpService } = useService();
  const getEpisodes = new GetEpisodes(httpService);
  const fetchEpisodes = async () => {
    try {
      if (!hasMoreData) return;
      const { data } = await getEpisodes.getAllEpisodes(page);
      const current = data.results;
      setEpisodes((prev) => {
        const episodes = {} as { [key: number]: EpisodeDto };
        [...prev, ...current].forEach((item) => {
          episodes[item.id] = item;
        });
        return Object.values(episodes);
      });
      setPage((prev) => prev + 1);
      if (!data.info.next) {
        setHasMoreData(false);
      }
    } catch (error) {
      setHasMoreData(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      setHasMoreData(true);
      const { data } = await getEpisodes.getAllEpisodes(1);
      const current = data.results;
      setEpisodes(current);
      setPage(2);
      if (!data.info.next) {
        setHasMoreData(false);
      }
    } catch {
      setHasMoreData(false);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  return {
    isLoading,
    episodes,
    hasMoreData,
    isRefreshing,
    fetchEpisodes,
    handleRefresh,
    page,
  };
};

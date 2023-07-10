import { Episode as EpisodeUiModel } from '@/domain/entities/Episode';
import { GetEpisodesByPageUseCase } from '@/domain/use-cases/GetEpisodesByPageUseCase';
import { useState } from 'react';

export const useEpisodes = (
  getEpisodesByPageUseCase: GetEpisodesByPageUseCase,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const [episodes, setEpisodes] = useState<EpisodeUiModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const fetchEpisodes = async () => {
    try {
      if (!hasMoreData) return;
      const episodesOrError = await getEpisodesByPageUseCase.execute(page);
      if (episodesOrError.isRight()) {
        const current = episodesOrError.value.episodes;
        setEpisodes((prev) => {
          const episodes = {} as { [key: number]: EpisodeUiModel };
          [...prev, ...current].forEach((item) => {
            episodes[item.id] = item;
          });
          return Object.values(episodes);
        });
        setPage((prev) => prev + 1);
        if (!episodesOrError.value.info.next) {
          setHasMoreData(false);
        }
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
      const episodesOrError = await getEpisodesByPageUseCase.execute(1);
      if (episodesOrError.isRight()) {
        const current = episodesOrError.value.episodes;
        setEpisodes(current);
        setPage(2);
        if (!episodesOrError.value.info.next) {
          setHasMoreData(false);
        }
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

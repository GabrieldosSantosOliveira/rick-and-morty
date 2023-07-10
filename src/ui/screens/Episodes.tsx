import {
  Episode,
  HeaderEpisodes,
  ListEmptyEpisodes,
  LoadingFlatList,
  RefreshControl,
  SkeletonEpisodes,
} from '@/ui/components/index';
import { useEpisodes } from '@/ui/hooks/useEpisodes';
import { Episode as EpisodeUiModel } from '@/domain/entities/Episode';
import { Theme } from '@/ui/styles/Theme';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { GetEpisodesByPageUseCase } from '@/domain/use-cases/GetEpisodesByPageUseCase';
export interface EpisodesProps {
  getEpisodesByPageUseCase: GetEpisodesByPageUseCase;
}
export const Episodes = ({ getEpisodesByPageUseCase }: EpisodesProps) => {
  const { colors } = Theme;

  const {
    episodes,
    isLoading,
    isRefreshing,
    fetchEpisodes,
    handleRefresh,
    hasMoreData,
  } = useEpisodes(getEpisodesByPageUseCase);

  const renderItem: ListRenderItem<EpisodeUiModel> = useCallback(({ item }) => {
    return <Episode episode={item} />;
  }, []);
  useEffect(() => {
    fetchEpisodes();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <HeaderEpisodes />
      {isLoading ? (
        <SkeletonEpisodes />
      ) : (
        <FlashList
          data={episodes}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          ListEmptyComponent={<ListEmptyEpisodes />}
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 12 }}
          onEndReached={fetchEpisodes}
          onEndReachedThreshold={0.1}
          renderItem={renderItem}
          estimatedItemSize={112}
          keyExtractor={({ id }) => String(id)}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </View>
  );
};

import {
  Episode,
  HeaderEpisodes,
  ListEmptyEpisodes,
  LoadingFlatList,
  RefreshControl,
  SkeletonEpisodes,
} from '@/components';
import { useEpisodes } from '@/hooks';
import { EpisodeDto } from '@/models';
import { Theme } from '@/styles';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import {FlashList, ListRenderItem} from '@shopify/flash-list'
export const Episodes = () => {
  const { colors } = Theme;

  const {
    episodes,
    isLoading,
    isRefreshing,
    fetchEpisodes,
    handleRefresh,
    hasMoreData,
  } = useEpisodes();

  const renderItem: ListRenderItem<EpisodeDto> = useCallback(({ item ,}) => {
    return <Episode {...item} />;
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
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal:12 }}
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

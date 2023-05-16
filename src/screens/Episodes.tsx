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
import { View, FlatList, ListRenderItem } from 'react-native';
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

  const renderItem: ListRenderItem<EpisodeDto> = useCallback(({ item }) => {
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
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          ListEmptyComponent={<ListEmptyEpisodes />}
          contentContainerStyle={{ paddingBottom: 20 }}
          onEndReached={fetchEpisodes}
          onEndReachedThreshold={0.1}
          data={episodes}
          renderItem={renderItem}
          style={{ paddingHorizontal: 12 }}
          keyExtractor={({ id }) => String(id)}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </View>
  );
};

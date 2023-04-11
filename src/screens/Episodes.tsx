import {
  Episode,
  HeaderEpisodes,
  ListEmptyEpisodes,
  LoadingFlatList,
  RefreshControl,
  SkeletonEpisodes,
} from '@/components';
import { useService } from '@/hooks';
import { EpisodeDto } from '@/models';
import { GetEpisodes } from '@/services';
import { Theme } from '@/styles';
import { useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
export const Episodes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [episodes, setEpisodes] = useState<EpisodeDto[]>([]);
  const [page, setPage] = useState<number>(1);

  const { httpService } = useService();
  const getEpisodes = new GetEpisodes(httpService);

  const { colors } = Theme;

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
      setRefreshing(false);
    }
  };

  const renderItem: ListRenderItem<EpisodeDto> = ({ item }) => {
    return <Episode {...item} />;
  };
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
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
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

import {
  Character,
  LoadingFlatList,
  SkeletonCharacters,
  HeaderCharacter,
  RefreshControl,
  ListEmptyCharacters,
} from '@/components';
import { useService } from '@/hooks';
import { CharacterDto } from '@/models';
import { GetCharacters } from '@/services';
import { Theme } from '@/styles';
import { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

export const Characters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

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
      setRefreshing(true);
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
      setRefreshing(false);
    }
  };

  const renderItem: ListRenderItem<CharacterDto> = ({ item }) => (
    <Character {...item} />
  );
  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.colors.background,
      }}
    >
      <HeaderCharacter />
      {isLoading ? (
        <SkeletonCharacters />
      ) : (
        <FlatList
          style={{ paddingHorizontal: 10 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={characters}
          ListEmptyComponent={<ListEmptyCharacters />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          renderItem={renderItem}
          keyExtractor={({ id }) => String(id)}
          onEndReachedThreshold={0.1}
          onEndReached={fetchCharacters}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </View>
  );
};

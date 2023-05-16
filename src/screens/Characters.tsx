import {
  Character,
  LoadingFlatList,
  SkeletonCharacters,
  HeaderCharacter,
  RefreshControl,
  ListEmptyCharacters,
} from '@/components';
import { useCharacters } from '@/hooks';
import { CharacterDto } from '@/models';
import { Theme } from '@/styles';
import { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

export const Characters = () => {
  const {
    isLoading,
    fetchCharacters,
    handleRefresh,
    hasMoreData,
    isRefreshing,
    characters,
  } = useCharacters();

  const renderItem: ListRenderItem<CharacterDto> = useCallback(
    ({ item }) => <Character {...item} />,
    [],
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
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
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

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
import {  View } from 'react-native';
import {ListRenderItem, FlashList
} from '@shopify/flash-list'
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
        <FlashList
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal:12 }}
          data={characters}
          ListEmptyComponent={<ListEmptyCharacters />}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          renderItem={renderItem}
          estimatedItemSize={166}
          keyExtractor={({ id }) => String(id)}
          onEndReachedThreshold={0.1}
          onEndReached={fetchCharacters}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </View>
  );
};

import {
  Character,
  LoadingFlatList,
  SkeletonCharacters,
  HeaderCharacter,
  RefreshControl,
  ListEmptyCharacters,
} from '@/components/index';
import { useCharacters } from '@/hooks/useCharacters';
import { Theme } from '@/styles/Theme';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { ListRenderItem, FlashList } from '@shopify/flash-list';
import { GetCharactersByPageUseCase } from '@/domain/use-cases/GetCharactersByPageUseCase';
import { Character as CharacterUiModel } from '@/domain/entities/Character';
export interface CharactersProps {
  getCharactersByPageUseCase: GetCharactersByPageUseCase;
}
export const Characters = ({ getCharactersByPageUseCase }: CharactersProps) => {
  const {
    isLoading,
    fetchCharacters,
    handleRefresh,
    hasMoreData,
    isRefreshing,
    characters,
  } = useCharacters(getCharactersByPageUseCase);

  const renderItem: ListRenderItem<CharacterUiModel> = useCallback(
    ({ item }) => <Character character={item} />,
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
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 12 }}
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
          onEndReachedThreshold={0.2}
          onEndReached={fetchCharacters}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </View>
  );
};

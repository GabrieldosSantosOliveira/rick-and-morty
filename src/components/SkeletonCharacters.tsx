import { memo } from 'react';
import { FlatList } from 'react-native';

import { SkeletonCharacter } from './Character';

const SkeletonCharactersBase = () => {
  return (
    <FlatList
      data={Array.from({ length: 20 })}
      style={{ paddingHorizontal: 10 }}
      renderItem={() => <SkeletonCharacter />}
      keyExtractor={() => Math.random().toString()}
    />
  );
};
export const SkeletonCharacters = memo(SkeletonCharactersBase);

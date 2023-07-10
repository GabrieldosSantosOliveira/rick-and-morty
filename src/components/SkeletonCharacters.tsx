import { memo } from 'react';

import { SkeletonCharacter } from './Character';
import { FlashList } from '@shopify/flash-list';
const SkeletonCharactersBase = () => {
  return (
    <FlashList
      data={Array.from({ length: 20 })}
      estimatedItemSize={162}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      renderItem={() => <SkeletonCharacter />}
      keyExtractor={() => Math.random().toString()}
    />
  );
};
export const SkeletonCharacters = memo(SkeletonCharactersBase);

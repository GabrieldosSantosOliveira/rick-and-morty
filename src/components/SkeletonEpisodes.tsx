import { memo } from 'react';
import { FlashList} from '@shopify/flash-list'

import { SkeletonEpisode } from './Episode';

const SkeletonEpisodesBase = () => {
  return (
    <FlashList
     estimatedItemSize={162}
      data={Array.from({ length: 20 })}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      renderItem={() => <SkeletonEpisode />}
      keyExtractor={() => Math.random().toString()}
    />
  );
};
export const SkeletonEpisodes = memo(SkeletonEpisodesBase);

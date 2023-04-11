import { memo } from 'react';
import { FlatList } from 'react-native';

import { SkeletonEpisode } from './Episode';

const SkeletonEpisodesBase = () => {
  return (
    <FlatList
      data={Array.from({ length: 20 })}
      style={{ paddingHorizontal: 10 }}
      renderItem={() => <SkeletonEpisode />}
      keyExtractor={() => Math.random().toString()}
    />
  );
};
export const SkeletonEpisodes = memo(SkeletonEpisodesBase);

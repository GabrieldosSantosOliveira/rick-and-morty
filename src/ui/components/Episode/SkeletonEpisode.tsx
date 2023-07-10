import { Theme } from '@/ui/styles/Theme';
import { memo } from 'react';
import { View } from 'react-native';

import { Skeleton } from '../Skeleton';
const SkeletonEpisodeBase = () => {
  return (
    <View
      style={{
        marginTop: 12,
        borderRadius: 12,
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        backgroundColor: Theme.colors.primary,
        opacity: 0.7,
        padding: 10,
      }}
    >
      <Skeleton translateX={370} style={{ flex: 1 }} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          paddingVertical: 8,
        }}
      >
        <Skeleton translateX={190} style={{ flex: 1, width: '50%' }} />
      </View>
    </View>
  );
};
export const SkeletonEpisode = memo(SkeletonEpisodeBase);

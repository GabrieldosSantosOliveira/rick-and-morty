import { Theme } from '@/ui/styles/Theme';
import { memo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { Skeleton } from '../Skeleton';
const SkeletonCharacterBase = () => {
  const { colors } = Theme;
  return (
    <Animated.View
      style={{
        marginTop: 12,
        borderRadius: 12,
        width: '100%',
        height: 150,
        flexDirection: 'row',
        backgroundColor: Theme.colors.primary,
        opacity: 0.7,
      }}
    >
      <Skeleton
        translateX={170}
        style={{
          backgroundColor: colors.primary,
          flex: 1,
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Skeleton
          translateX={200}
          style={{
            height: 20,
            width: '100%',
          }}
        />
      </View>
    </Animated.View>
  );
};
export const SkeletonCharacter = memo(SkeletonCharacterBase);

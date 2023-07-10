import { Theme } from '@/ui/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, useEffect, memo } from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  AnimateProps,
} from 'react-native-reanimated';
export interface SkeletonProps extends AnimateProps<ViewProps> {
  translateX: number;
  backgroundColor?: string;
}
const SkeletonBase: FC<SkeletonProps> = ({
  translateX,
  backgroundColor,
  style,
  ...props
}) => {
  const skeletonValue = useSharedValue(0);

  const { colors } = Theme;
  useEffect(() => {
    skeletonValue.value = withRepeat(
      withTiming(1, { easing: Easing.ease, duration: 2000 }),
      -1,
    );
  }, []);

  const textStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          skeletonValue.value,
          [0, 1],
          [-300, translateX + 300],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));
  return (
    <Animated.View
      style={[
        style,
        {
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: backgroundColor ? backgroundColor : colors.primary,
        },
      ]}
      {...props}
    >
      <Animated.View
        style={[
          textStyle,
          {
            width: '50%',
            borderRadius: 8,
            height: '100%',
            backgroundColor: 'transparent',
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(100, 50, 200, 1)', 'rgba(110, 50, 200, 1)']}
          style={{ flex: 1 }}
          start={{
            x: 0.2,
            y: 1,
          }}
          end={{
            x: 1,
            y: 1,
          }}
        />
      </Animated.View>
    </Animated.View>
  );
};
export const Skeleton = memo(SkeletonBase);

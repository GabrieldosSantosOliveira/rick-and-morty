import { Theme } from '@/styles';
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
  color?: string;
}
const SkeletonBase: FC<SkeletonProps> = ({
  translateX,
  color,
  backgroundColor,
  style,
  ...props
}) => {
  const skeletonValue = useSharedValue(0);

  const { colors } = Theme;
  useEffect(() => {
    skeletonValue.value = withRepeat(
      withTiming(1, { easing: Easing.ease, duration: 700 }),
      -1,
    );
  }, []);
  const opacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      skeletonValue.value,
      [0, 1],
      [1, 0.5],
      Extrapolate.CLAMP,
    ),
  }));
  const textStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          skeletonValue.value,
          [0, 1],
          [-20, translateX],
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
        opacity,
      ]}
      {...props}
    >
      <Animated.View
        style={[
          textStyle,
          {
            width: 20,
            borderRadius: 8,
            height: '100%',
            backgroundColor: color ? color : colors.primary,
          },
        ]}
      />
    </Animated.View>
  );
};
export const Skeleton = memo(SkeletonBase);

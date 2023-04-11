import { Theme } from '@/styles/Theme';
import { FC, memo } from 'react';
import {
  RefreshControl as ReactNativeRefreshControl,
  RefreshControlProps,
} from 'react-native';
const RefreshControlBase: FC<RefreshControlProps> = (props) => {
  const { colors } = Theme;
  return (
    <ReactNativeRefreshControl
      colors={[colors.primary, colors.background]}
      progressBackgroundColor={colors.background}
      {...props}
    />
  );
};
export const RefreshControl = memo(RefreshControlBase);

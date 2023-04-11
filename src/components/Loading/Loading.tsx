import { Theme } from '@/styles/Theme';
import { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
const LoadingBase = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.background,
      }}
    >
      <ActivityIndicator size="large" color={Theme.colors.primary} />
    </View>
  );
};
export const Loading = memo(LoadingBase);

import { Theme } from '@/styles/Theme';
import { FC, memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
export interface LoadingFlatListProps {
  isLoading: boolean;
}
const LoadingFlatListBase: FC<LoadingFlatListProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
      }}
    >
      <ActivityIndicator size="large" color={Theme.colors.primary} />
    </View>
  );
};
export const LoadingFlatList = memo(LoadingFlatListBase);

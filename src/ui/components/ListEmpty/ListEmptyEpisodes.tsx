import { Theme } from '@/ui/styles';
import { Text, View } from 'react-native';

export const ListEmptyEpisodes = () => {
  const { colors, fonts } = Theme;
  return (
    <View style={{ width: '100%', paddingVertical: 30, paddingHorizontal: 40 }}>
      <Text
        style={{
          color: colors.white,
          fontFamily: fonts.Lexend[600],
          textAlign: 'center',
          fontSize: 14,
        }}
      >
        Ocorreu um erro ao buscar os episódios, tente novamente mais tarde
      </Text>
    </View>
  );
};

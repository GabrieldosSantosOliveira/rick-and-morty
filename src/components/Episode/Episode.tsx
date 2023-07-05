import { EpisodeDto } from '@/models';
import { Theme } from '@/styles';
import { FC, memo } from 'react';
import { Text, View } from 'react-native';
const EpisodeBase: FC<EpisodeDto> = ({ name, episode, air_date }) => {
  const { colors, fonts } = Theme;
  return (
    <View
      style={{
        height: 100,
        width: '100%',
        backgroundColor: colors.primary,
        marginTop: 12,
        borderRadius: 12,
        padding: 12,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontFamily: fonts.Lexend[600],
          fontSize: 16,
          color: colors.white,
        }}
      >
        {name} - {episode}
      </Text>
      <Text
        style={{
          fontFamily: fonts.Lexend[600],
          fontSize: 12,
          color: colors.black,
        }}
      >
        {air_date}
      </Text>
    </View>
  );
};
export const Episode = memo(EpisodeBase);

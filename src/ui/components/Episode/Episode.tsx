import { Theme } from '@/ui/styles/Theme';
import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';
import { Episode as EpisodeUiModel } from '@/domain/entities/Episode';
export interface EpisodeProps {
  episode: EpisodeUiModel;
}
const EpisodeBase: FC<EpisodeProps> = ({ episode }) => {
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
        {episode.name} - {episode.episode}
      </Text>
      <Text
        style={{
          fontFamily: fonts.Lexend[600],
          fontSize: 12,
          color: colors.black,
        }}
      >
        {episode.airDate}
      </Text>
    </View>
  );
};
export const Episode = memo(EpisodeBase);

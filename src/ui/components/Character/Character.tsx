import { Theme } from '@/ui/styles/Theme';
import { memo, useState } from 'react';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import { Character as CharacterUiModel } from '@/domain/entities/Character';
export interface CharacterProps {
  character: CharacterUiModel;
}
const CharacterBase = ({ character }: CharacterProps) => {
  const [isImageIsLoad, setIsImageIsLoad] = useState<boolean>(false);
  const { colors } = Theme;
  return (
    <View
      style={{
        marginTop: 16,
        height: 150,
        width: '100%',
        backgroundColor: Theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
      }}
    >
      <View style={{ flex: 1, height: '100%', borderRadius: 8 }}>
        <Image
          resizeMode="contain"
          style={[
            {
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              zIndex: 1,
              borderRadius: 8,
            },
          ]}
          source={{ uri: character.image }}
          onLoad={() => setIsImageIsLoad(true)}
        />
        {isImageIsLoad ? null : (
          <View
            style={[
              {
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                position: 'absolute',
                width: '100%',
                height: '100%',
              },
            ]}
          >
            <ActivityIndicator size="small" color={colors.background} />
          </View>
        )}
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: Theme.colors.white,
            fontSize: 16,
            fontFamily: Theme.fonts.Lexend[700],
            textAlign: 'center',
          }}
        >
          {character.name}
        </Text>
      </View>
    </View>
  );
};
export const Character = memo(CharacterBase);

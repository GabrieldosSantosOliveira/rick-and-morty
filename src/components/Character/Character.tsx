import { CharacterDto } from '@/models/CharacterDto';
import { Theme } from '@/styles/Theme';
import { memo } from 'react';
import { Image, Text, View } from 'react-native';
const CharacterBase = (props: CharacterDto) => {
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
      <Image
        resizeMode="contain"
        style={{ flex: 1, height: '100%', borderRadius: 8 }}
        source={{ uri: props.image }}
      />
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
            fontSize: Theme.fontSize[16],
            fontFamily: Theme.fonts.Lexend[700],
            textAlign: 'center',
          }}
        >
          {props.name}
        </Text>
      </View>
    </View>
  );
};
export const Character = memo(CharacterBase);

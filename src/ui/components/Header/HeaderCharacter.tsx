import Banner from '@/assets/images/Banner.jpg';
import { memo } from 'react';
import { Image, useWindowDimensions } from 'react-native';
const dimensions = {
  width: 2960,
  height: 1440,
};
const HeaderCharacterBase = () => {
  const ratio = dimensions.height / dimensions.width;
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * ratio;
  return (
    <Image
      source={Banner}
      style={{
        width,
        height,
      }}
    />
  );
};
export const HeaderCharacter = memo(HeaderCharacterBase);

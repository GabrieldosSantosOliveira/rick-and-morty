import BannerEpisodes from '@/assets/images/BannerEpisodes.jpg';
import { memo } from 'react';
import { Image, useWindowDimensions } from 'react-native';
const dimensions = {
  width: 564,
  height: 317,
};
const HeaderEpisodesBase = () => {
  const ratio = dimensions.height / dimensions.width;
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * ratio;
  return (
    <Image
      source={BannerEpisodes}
      style={{
        width: '100%',
        height,
      }}
    />
  );
};
export const HeaderEpisodes = memo(HeaderEpisodesBase);

import { PixelRatio } from 'react-native';
const { getPixelSizeForLayoutSize } = PixelRatio;
export const ThemeSize = {
  52: getPixelSizeForLayoutSize(22),
  260: getPixelSizeForLayoutSize(100),
};

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// quran readers
export const api_readers = 'https://qurani-api.herokuapp.com/api/reciters';

export const api_quranText = 'https://quran-endpoint.vercel.app/quran';

export const api_hadith = 'https://api.hadith.sutanlab.id/books';

export const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const fonts = {
  largeTitle: {fontFamily: 'Cairo-Bold', fontSize: sizes.largeTitle},
  h1: {fontFamily: 'Cairo-Bold', fontSize: sizes.h1},
  h2: {fontFamily: 'Cairo-Bold', fontSize: sizes.h2},
  h3: {fontFamily: 'Cairo-Medium', fontSize: sizes.h3},
  h4: {fontFamily: 'Cairo-Medium', fontSize: sizes.h4},
  h5: {fontFamily: 'Cairo-Medium', fontSize: sizes.h5},
  body1: {fontFamily: 'Cairo-Regular', fontSize: sizes.body1},
  body2: {fontFamily: 'Cairo-Regular', fontSize: sizes.body2},
  body3: {fontFamily: 'Cairo-Regular', fontSize: sizes.body3},
  body4: {fontFamily: 'Cairo-Regular', fontSize: sizes.body4},
  body5: {fontFamily: 'Cairo-Regular', fontSize: sizes.body5},
};

export const colors = {
  primary: '#00b06e',
  primary_rgba: '0, 176, 110',
  secondary: '#17a2b8',
  dark: '#0d0f23',
  subDark: '#6d6d6d',
  light: '#fff',
  subLight: '#f3f3f3',
};

export const images = {
  mousque: require('@/assets/images/mosque.png'),
  muslim: require('@/assets/images/muslim.png'),
  quran: require('@/assets/images/quran.png'),
  man: require('@/assets/images/man.png'),
};

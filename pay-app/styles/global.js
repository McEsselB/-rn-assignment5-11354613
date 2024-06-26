// styles/global.js

import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from './colors';
import { fonts } from './fonts';
import useTheme from '../hooks/useTheme';

const getGlobalStyles = (theme) => {
  const colors = theme === 'light' ? lightColors : darkColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    text: {
      color: colors.text,
      ...fonts.regular,
    },
    title: {
      color: colors.text,
      ...fonts.large,
      marginBottom: 16,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 16,
      marginVertical: 8,
    },
  });
};

export default getGlobalStyles;

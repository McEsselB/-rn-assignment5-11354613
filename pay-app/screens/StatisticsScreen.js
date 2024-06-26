import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../hooks/useTheme';
import { lightColors, darkColors } from '../styles/colors';

const StatisticsScreen = () => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Statistics Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default StatisticsScreen;

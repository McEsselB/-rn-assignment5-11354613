// components/ToggleSwitch.js

import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={styles.container}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#767577', true: '#4CAF50' }} // Customize track colors
        thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'} // Always white thumb color
        ios_backgroundColor="#3e3e3e" // iOS background color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToggleSwitch;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../hooks/useTheme';
import { lightColors, darkColors } from '../styles/colors';
import ToggleSwitch from '../components/ToggleSwitch';

const SettingsScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  const settingsOptions = [
    { title: 'Language', screen: 'Language' },
    { title: 'My Profile', screen: 'Profile' },
    { title: 'Contact Us', screen: 'Contact' },
    { title: 'Change Password', screen: 'ChangePassword' },
    { title: 'Privacy Policy', screen: 'PrivacyPolicy' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <ScrollView style={styles.scrollView}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingItem}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Text style={[styles.text, { color: colors.text }]}>{option.title}</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.text} />
          </TouchableOpacity>
        ))}
        <View style={styles.settingItem}>
          <Text style={[styles.text, { color: colors.text }]}>Theme</Text>
          <ToggleSwitch />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
     textAlign: 'center',
    marginBottom: 80
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default SettingsScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native'; // Import Text component for custom styling
import HomeScreen from '../screens/HomeScreen';
import MyCardsScreen from '../screens/MyCardsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import useTheme from '../hooks/useTheme';
import { lightColors, darkColors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();
  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = require('../assets/images/home.png');
            } else if (route.name === 'My Cards') {
              iconPath = require('../assets/images/myCards.png');
            } else if (route.name === 'Statistics') {
              iconPath = require('../assets/images/statictics.png');
            } else if (route.name === 'Settings') {
              iconPath = require('../assets/images/settings.png');
            }

            return <Image source={iconPath} style={{ width: 25, height: 25, tintColor: color }} />;
          },
          tabBarLabelStyle: {
            fontSize: 14, // Adjust font size as needed
            fontWeight: 'bold', // Adjust font weight
            marginBottom: 5
          },
          tabBarStyle: {
            backgroundColor: colors.tabBarBackground,
            height: 70, // Adjust tabBar height
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

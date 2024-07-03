# React Native Application README

# DCIT 202 (MOBILE APPLICATION DEVELOPMENT)

### Assignment 5

### STUDENT ID : 11354613

# Description of Task

This is the fifth assignment for the DCIT 202 (Mobile Application Development) course. The motive of this assignment is to is to create a React Native application.

### Files and Components

### 1. ToggleSwitch.js

**Purpose:** Provides a toggle switch component for switching between light and dark themes.

- **Components Used:** `View`, `Switch`, `StyleSheet`
- **Custom Hooks:** `useTheme` for theme management.
- **Styling:** Customized track and thumb colors based on theme.

### 2. TransactionItem.js

**Purpose:** Displays individual transaction items with image, details, and amount.

- **Components Used:** `View`, `Text`, `Image`, `StyleSheet`
- **Custom Hooks:** `useTheme` for theme management.
- **Styling:** Dynamically adjusts text color based on transaction amount positivity/negativity.

### 3. AppNavigator.js

**Purpose:** Sets up the bottom tab navigation for different screens.

- **Navigation Components:** `NavigationContainer`, `createBottomTabNavigator`
- **Screens Used:** `HomeScreen`, `MyCardsScreen`, `StatisticsScreen`, `SettingsScreen`
- **Assets:** Includes icons for each tab screen.
- **Custom Hooks:** `useTheme` for theme management.
- **Styling:** Customizes tab bar appearance based on selected theme.

### 4. HomeScreen.js

**Purpose:** Displays the main screen of the application with user profile, cards, actions, and transaction list.

- **Components Used:** `View`, `Text`, `StyleSheet`, `FlatList`, `TouchableOpacity`, `Image`
- **Custom Hooks:** `useTheme` for theme management.
- **Assets:** Includes user profile image and card images.
- **Styling:** Customizes UI elements such as profile section, transaction list, and action buttons.

### 5. SettingsScreen.js

**Purpose:** Displays settings options and allows toggling between light and dark themes.

- **Components Used:** `View`, `Text`, `StyleSheet`, `ScrollView`, `TouchableOpacity`
- **Custom Hooks:** `useTheme` for theme management, `ToggleSwitch` for theme toggling.
- **Navigation:** Uses React Navigation for screen navigation.
- **Styling:** Customizes settings options and integrates theme toggle functionality.

## Screenshots

![Screenshot 1](./pay-app/assets/images/Screenshot%202024-06-26%20174249.png)
![Screenshot 2](./pay-app/assets/images/Screenshot%202024-06-26%20174301.png)
![Screenshot 3](./pay-app/assets/images/Screenshot%202024-06-26%20180251.png)
![Screenshot 3](./pay-app/assets/images/Screenshot%202024-06-26%20174317.png)

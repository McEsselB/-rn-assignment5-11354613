// App.js

import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => (
  <ThemeProvider>
    <AppNavigator />
  </ThemeProvider>
);

export default App;

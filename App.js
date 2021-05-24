import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import theme from './source/constants/theme';
import AppNavigation from './source/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';


const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>

      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.statusbar} 
      />

      <AppNavigation />

    </NavigationContainer>
  )

};

export default App;

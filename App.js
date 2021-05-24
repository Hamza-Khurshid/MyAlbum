import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import AppNavigation from './source/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>

      <StatusBar
        barStyle='light-content'
        backgroundColor='black' 
      />

      <AppNavigation />

    </NavigationContainer>
  )

};

export default App;

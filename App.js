import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import theme from './source/constants/theme';
import Albums from './source/screens/albums';

const App = () => {

  return (
    <React.Fragment>

      <StatusBar
        barStyle='light-content'
        backgroundColor='black' 
      />

      <Albums />

    </React.Fragment>
  )

};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Homescreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResult from './src/screens/SearchResult';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};


export default App;

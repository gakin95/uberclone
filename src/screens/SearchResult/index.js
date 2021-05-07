import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, Dimensions} from 'react-native';

import DestinationMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

import styles from './styles';

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <DestinationMap />
      </View>
      <View style={styles.types}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResult;

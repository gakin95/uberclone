import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace){
      console.log('redirect to result')
    }
  },[originPlace,destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: 'API_KEY',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: 'KEY_KEY',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

import React from 'react';
import {View, Image, StyleSheet, FlatList, ScrollView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import cars from '../../assets/data/cars';

const RouteMap = () => {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAcxtb7nAs568Mfk3lBqE8_3FuvGzAf3MY';

  return (
    <MapView
      style={styles.map}
      // provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <View>
              <Marker
                coordinate={{latitude: 6.545419, longitude: 3.383809}}
                title="Emmanuel"
                description="The description comes here"
              />
              <MapViewDirections
                origin={{latitude: 6.44909, longitude: 3.26982}}
                destination={{latitude: 6.545419, longitude: 3.383809}}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="#1C72E3"
              />
              <Marker
                coordinate={{latitude: 6.44909, longitude: 3.26982}}
                title="Emmanuel"
                description="The description comes here"
              />
            </View>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  img: {
    height: 70,
    width: 70,
  },
});

export default RouteMap;

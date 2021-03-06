import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import styles from './styles';

const HomeSearch = () => {
  return (
    <View>
      {/* input box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      {/* previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Spinner club</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]}>
        <Entypo name="home" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Spinner club</Text>
      </View>

      {/* new destination */}
    </View>
  );
};

export default HomeSearch;

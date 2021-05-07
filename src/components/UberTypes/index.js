import React from 'react';
import {View, Text, Pressable} from 'react-native';

import UberTypesRow from '../UberTypesRow';
import typeData from '../../assets/data/types';

import styles from './styles';

const UberTypes = () => {
  const confirm = () => {
    console.log('uber confirmed');
  };
  return (
    <View>
      {typeData.map((type) => (
        <UberTypesRow key={type.id} type={type} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff',fontWeight:'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;

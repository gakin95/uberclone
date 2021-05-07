import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel if neccesary</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis minima doloribus sed possimus suscipit, ex sit! Porro repellat, totam assumenda reiciendis, nam, minus velit maiores commodi dolor in harum.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default CovidMessage

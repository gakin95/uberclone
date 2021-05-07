import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.map}>
            <HomeMap />
            </View>
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen

import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const AsteroidInfoScreen = ({ route, navigation }) => {
    const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = route.params;

    console.log('[AsteroidInfoScreen] ', name, nasa_jpl_url, is_potentially_hazardous_asteroid);

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>name: {name}</Text>
            <Text style={styles.textStyle}>nasa_jpl_url: {nasa_jpl_url}</Text>
            <Text style={styles.textStyle}>is_potentially_hazardous_asteroid: {String(is_potentially_hazardous_asteroid)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    textStyle: {
        fontSize: 17,
        margin: 10,
    }
});

export default AsteroidInfoScreen;
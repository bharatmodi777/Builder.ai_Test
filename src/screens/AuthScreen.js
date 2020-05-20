import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsteroidInfoScreen from './AsteroidInfoScreen';

const AuthScreen = ({ navigation }) => {
    const [enableButton, setEnableButton] = useState(true);
    const [asteriudId, setAsteroidID] = useState('');
    const [asteriuds, setAsteriuds] = useState([]);

    let API_KEY = 'lVKFm84J8fxPAAX8l5Q9XWHj9axo0cuEkZpNOa7e';

    textChangeHandler = (text) => {
        setAsteroidID(text);
        if (text === '') {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    }

    randomAsteroidHandler = () => {
        getAsteroidInformation()
    }

    getAsteroidInformation = () => {
        console.log('button pressed');
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
            .then(res => {
                console.log(res.data.near_earth_objects);
                let asteroidsCount = res.data.near_earth_objects.length;
                let randomIndex = Math.floor((Math.random() * (asteroidsCount - 1)) + 0);

                let randomAsteroidId = res.data.near_earth_objects[randomIndex].id;
                console.log('randomAsteroidId: ', randomAsteroidId);

                axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomAsteroidId}?api_key=${API_KEY}`)
                    .then(details => {
                        console.log('Details: ', details);
                        navigation.navigate('AsteroidInfoScreen', {
                            name: details.data.name,
                            nasa_jpl_url: details.data.nasa_jpl_url,
                            is_potentially_hazardous_asteroid: details.data.is_potentially_hazardous_asteroid
                        })
                    })
            });
    }

    return (
        <View style={styles.containerStyle}>
            <TextInput style={styles.textInputStyle}
                placeholder={'Enter Asteroid ID'}
                onChangeText={textChangeHandler}></TextInput>
            <TouchableOpacity
                disabled={enableButton}
                style={[{
                    ...styles.buttonStyle,
                    backgroundColor: enableButton ? 'grey' : 'blue'
                }]}>
                <Text style={styles.textStyles}
                    onPress={randomAsteroidHandler}>Random Asteroid</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        margin: 20,
        paddingLeft: 10,
        fontSize: 18
    },
    buttonStyle: {
        backgroundColor: 'blue',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    textStyles: {
        color: 'white',
        fontSize: 18
    }
});

export default AuthScreen;
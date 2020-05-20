import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import AsteroidInfoScreen from '../screens/AsteroidInfoScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="AsteroidInfoScreen" component={AsteroidInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;
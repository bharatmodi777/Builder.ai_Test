/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import NavigationStack from './src/components/NavigationStack';
import { StyleSheet, SafeAreaView } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, }}>
        <NavigationStack></NavigationStack>
      </SafeAreaView>
    </>
  );
};



export default App;

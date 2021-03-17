import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Animation from './screens/Animation';
import Loop from './screens/loop.js';
import Tester from './screens/tester';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Tester/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

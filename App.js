import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header'
import HomeData from './components/HomeData'

import colors from './components/config/colors.js'


export default function App() {
  console.log("hi")
  return (
      <View style={styles.container}>
    <ScrollView>
        <Header/>
        <HomeData/>
        {/* <Text>Open up App.js to start working on your app test best !</Text> */}
        
    </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position : 'absolute',
    height : '100%',
    // flex: 1,
    backgroundColor: colors.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

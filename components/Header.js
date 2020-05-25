import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native';

import colors from './config/colors.js'


export default function Header() {
  console.log("hi")
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>C19 Tracker</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.1,
    flexDirection : 'row',
    backgroundColor: colors.secondary,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height : 100,
    height: Dimensions.get('window').height/7,
    width : '100%',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    elevation : 5
  },
  logoContainer: {
    flex: 0.3,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleContainer: {
    flex: 0.7,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText: {
    fontSize : 20,
    fontWeight : 'bold',
    // fontFamily: '',
  },
});

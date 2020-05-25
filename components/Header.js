import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Dimensions } from 'react-native';

import colors from './config/colors.js'


export default function Header() {
//   console.log("hi")
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}> 
            <View style={styles.c19BoxStyle}>
                <Text style={{fontSize : 15, fontWeight : '700', color : colors.secondary}}>C19</Text>
            </View>
            <View style={styles.trackerBoxStyle}>
                <Text style={styles.titleText}>
                    TRACKER
                </Text>
            </View>
        </View>
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
  titleTextContainer: {
      height: 10,
      width : 100,
    flex: 1,
    flexDirection : 'row',
    // top : 50,
    // backgroundColor: colors.secondary,
    alignItems: 'center',
    // justifyContent: 'center',
    
  },
  titleText: {
    fontSize : 15,
    fontWeight : 'bold',
    color : colors.primary,
    // fontFamily: '',
  },
  c19BoxStyle: {
      flex: 0.3,
    height : 30,
    width : 30,
    backgroundColor : colors.primary,
    justifyContent : 'center',
    alignItems : 'center',

  },
  trackerBoxStyle: {
    flex: 0.7,
    justifyContent : 'center',
    alignItems : 'center',
      height : 30,
      borderColor : colors.primary,
      borderRadius : 2,
    //   borderStyle : "solid",
      borderWidth : 1,
    // width : 10,
    // backgroundColor : colors.primary,

  },
});

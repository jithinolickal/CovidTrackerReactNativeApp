import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Header from './components/Header'
import HomeData from './components/HomeData'
import { useState, useEffect } from "react";

import colors from './components/config/colors.js'


export default function App() {

  const [dta, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
      let secTimer = setInterval( () => {
        setDt(new Date().toLocaleString())
      },1000)

      return () => clearInterval(secTimer);
  }, []);

  // console.log("hi")
  return (
      <View style={styles.container}>
    <ScrollView>
        <Header/>
        <View style={styles.dateTimeStyle}>
          {/* <Text style={styles.dateTimeTextStyle}>{Date().getDate() + '/' + Date().getMonth() + '/' + Date().getFullYear() + ' ' + Date().getHours() + ':' + Date().getMinutes() + ':' + Date().getSeconds()}</Text> */}
          <Text style={styles.dateTimeTextStyle}>•{dta}•</Text>
        </View>
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
  dateTimeStyle: {
    // position : 'absolute',
    // height : '100%',
    height: Dimensions.get('window').height/15,
    // flex: 1,
    // backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTimeTextStyle: {
    fontSize : 15,
    fontWeight : '700',
    color : colors.timeColor,
    
  },
});

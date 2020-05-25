import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Dimensions } from 'react-native';

import dataCovid from '../store/dataCovid.json'
import colors from './config/colors.js'


export default class DataList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    }
 }
  render() {
      const {state, total, recovered, deceased, heading, key} = this.props;
      const testStyle = (heading)? styles.testHeadingStyle : styles.dataStyle
    return (
        <View style={styles.container}>
            <View style={styles.stateBoxState}>
                <Text style={styles.dataStateStyle}>{state}</Text>
            </View>
            <View style={styles.stateBox}>
                <Text style={testStyle}>{total}</Text>
            </View>
            <View style={styles.stateBox}>
                <Text style={testStyle}>{recovered}</Text>
            </View>
            <View style={styles.stateBox}>
                <Text style={testStyle}>{deceased}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    flex: 1,
    // height : '100%',
    // height: 1500,
    flexDirection : 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // elevation : 5,
    paddingTop : 3,
  },
  stateBoxState:{
    height : 30,
    width : 120,
    backgroundColor : '#505050',
    borderRadius : 5,
    // top : 5,
    justifyContent : 'center',
    // alignItems : 'center',
    elevation : 5,
    textAlign : 'left',
    paddingLeft : 5,


  },
  stateBox:{
    height : 30,
    width : 77,
    backgroundColor : '#f6f6f7',
    borderRadius : 5,
    // top : 5,
    justifyContent : 'center',
    // alignItems : 'center',
    elevation : 5,
    textAlign : 'left',
    paddingLeft : 5,


  },
  testHeadingStyle:{
    fontSize : 15,
    fontWeight : '700',
    color : '#6c757d',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  dataStyle:{
    fontSize : 15,
    fontWeight : '700',
    color : '#6c757d',
    // textShadowColor: 'rgba(0, 0, 0, 0.50)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10,
  },
  dataStateStyle:{
    fontSize : 15,
    fontWeight : '700',
    color : '#ffffff',
    // textShadowColor: 'rgba(0, 0, 0, 0.50)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10,
  }
});

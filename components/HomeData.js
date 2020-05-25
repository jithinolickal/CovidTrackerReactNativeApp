import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Dimensions } from 'react-native';

import dataCovid from '../store/dataCovid.json'
import DataList from './DataList.js'
import colors from './config/colors.js'


export default class HomeData extends React.Component{
  constructor(props) {
    super(props);


    this.state = {
      dataSource : '',
      currentTotal : 0,
      currentRecovered : 0,
      currentDeceased : 0,
      currentActive : 0,
      newDayTotal : 0,
      newDayRecovered : 0,
      newDayDeceased : 0,
      newDayActive : 0,
    }
 }
  
fetchUsers(){
  fetch("https://api.covidindiatracker.com/state_data.json")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
      
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    // console.log(responseJson)
    // this.calculateCount();
  
}

  componentDidMount(){
    this.fetchUsers();
  }

  /* componentDidUpdate(){
    this.calculateCount();
  } */

    calculateCount(){
      console.log("cc")
      // console.log("cclen", this.state.dataSource)
      // console.log("cclen", this.state.dataSource.length)
      if(this.state.dataSource.length > 0){
        let data = /* JSON.stringify( */this.state.dataSource;
        console.log(data)

        // if(recoveredResult == 0||DeceasedResult == 0||activeResult == 0){
          console.log("inside")
        // var dataValue = Array.from(data)
        // var activeResult = data.map(activeVal => activeVal.active).reduce((nextValue, activeVal) => activeVal + nextValue);
        var recoveredResult = data.map(activeVal => activeVal.recovered).reduce((nextValue, activeVal) => activeVal + nextValue);
        var DeceasedResult = data.map(activeVal => activeVal.deaths).reduce((nextValue, activeVal) => activeVal + nextValue);
        var activeResult = data.map(activeVal => activeVal.active).reduce((nextValue, activeVal) => activeVal + nextValue);
        var totalResult = recoveredResult+DeceasedResult+activeResult;
        console.log(recoveredResult)
        console.log(DeceasedResult)
        console.log(activeResult)
        var newDayRecoveredResult = data.map(activeVal => activeVal.rChanges).reduce((nextValue, activeVal) => activeVal + nextValue);
        var newDayDeceasedResult = data.map(activeVal => activeVal.dChanges).reduce((nextValue, activeVal) => activeVal + nextValue);
        var newDayActiveResult = data.map(activeVal => activeVal.aChanges).reduce((nextValue, activeVal) => activeVal + nextValue);
        var newDayTotalResult = newDayRecoveredResult+newDayDeceasedResult+newDayActiveResult;
        
          this.setState({
            currentTotal : totalResult,
            currentRecovered : recoveredResult,
            currentDeceased : DeceasedResult,
            currentActive : activeResult,
            newDayRecovered : newDayRecoveredResult,
            newDayDeceased : newDayDeceasedResult,
            newDayActive : newDayActiveResult,
            newDayTotal : newDayTotalResult,
          })
        // }
        console.log(recoveredResult)
        console.log(this.state.currentRecovered)
        console.log(this.state.currentDeceased)
        console.log(this.state.currentActive)
      }
    }

    handleUpdatedData(){

    }


    handleDataList=()=>{
      // console.log("asdasd", this.state.dataSource.length)
      if(this.state.dataSource.length > 0){
        return this.state.dataSource.map(function(element){
          // console.log(element);
          return (
            <View>
              <DataList 
              key= {element.id}
              state={element.state} 
              recovered={element.recovered} 
              deceased={element.deaths} 
              total= {element.confirmed+element.recovered+element.deaths+element.active}
              heading={false}
              />
            </View>
          );
      });
      }


      /* 
      console.log("asdasd", this.state.dataSource.length)
      if(this.state.dataSource.length > 0){
        this.state.dataSource.forEach(function(element){
          console.log(element);
          return (
          <View>
          <DataList 
            state={element.state} 
            recovered={element.recovered} 
            Deceased={element.deaths} 
            total= {element.confirmed+element.recovered+element.deaths+element.active}
            heading={true}
            />
            </View>
            );
      });
      } */
    }


  render() {
    // console.log("erer", this.state.dataSource)
    // console.log("erer", this.state.currentRecovered)
    // console.log("erer", JSON.stringify(dataCovid) )
    const upArrow = "↑"
    const downArrow = "↓"
    if(this.state.currentActive == 0){
      this.calculateCount();
    }
    return (
        <View style={styles.container}>
      {/* <ScrollView> */}
          <View style={styles.containerTop}>
            <View style={styles.totalContainerOne}>
              <Text style={[styles.textStyle, styles.textTotal,]}>Total</Text>
              <Text>{this.state.currentTotal}[{this.state.newDayTotal}{(this.state.newDayTotal > 0)?upArrow:null}]</Text>
            </View>
            <View style={styles.totalContainerTwo}>
              <View style={styles.recoveredContainer}>
                <Text style={[styles.textStyle, styles.textRecovered, ]}>Recovered</Text>
                <Text>{this.state.currentRecovered}[{this.state.newDayRecovered}{(this.state.newDayRecovered > 0)?upArrow:null}]</Text>
              </View>
              <View style={styles.DeceasedContainer}>
                <Text style={[styles.textStyle, styles.textDeceased, ]}>Deceased</Text>
                <Text>{this.state.currentDeceased}[{this.state.newDayDeceased}{(this.state.newDayDeceased > 0)?upArrow:null}]</Text>
              </View>
              <View style={styles.activeContainer}>
                <Text style={[styles.textStyle, styles.textActive, ]}>Active</Text>
                <Text>{this.state.currentActive}[{this.state.newDayActive}{(this.state.newDayActive > 0)?upArrow:null}]</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerBottom}>
            <DataList key="heading" state="State" total="Total" recovered="Recovered" deceased="Deceased" heading={true}/>
            {/* <DataList state="State" total="Total" recovered="Recovered" Deceased="Deceased" heading={true}/> */}

              {
                this.handleDataList()
                
              }
            
            
          </View>
      {/* </ScrollView> */}
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    // width : '100%',
    // flex: 1,
    // height : '100%',
    // height: 1500,
    // flexDirection : 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // elevation : 5,
    marginBottom : 5,
  },

  containerTop: {
    // flex: 0.3,
    // height : '15%',
    height: Dimensions.get('window').height/3,
    // flexDirection : 'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // elevation : 5
  },
  totalContainerOne: {
    height : '45%',
    // flex: 0.8,
    width : '90%',
    backgroundColor: '#eeeeee',
    elevation : 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 15,

  },
  textTotal:{
    color : colors.totalColor,
  },
  totalContainerTwo: {
    // flex: 0.8,
    width : '100%',
    height : '45%',
    // backgroundColor: 'green',
    flexDirection : 'row',
    justifyContent : 'space-evenly'
  },
  recoveredContainer: {
    // flex: 1,
    width : '30%',
    // height : '45%',
    backgroundColor: '#eeeeee',
    elevation : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 15,
  },
  textRecovered:{
    color : colors.recoveredColor,
  },
  DeceasedContainer: {
    // flex: 1,
    width : '30%',
    // height : '45%',
    backgroundColor: '#eeeeee',
    elevation : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 15,
  },
  textDeceased:{
    color : colors.DeceasedColor,
  },
  activeContainer: {
    // flex: 1,
    width : '30%',
    // height : '45%',
    backgroundColor: '#eeeeee',
    elevation : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 15,
  },
  textActive:{
    color : colors.activeColor,
  },
  textStyle:{
    fontSize : 18,
    fontWeight : '700',
  },

  containerBottom: {
    position : 'relative',
    paddingTop : 10,
    // flex: 0.4,
    // height:'85%',
    // flexDirection : 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // elevation : 5
  },
});

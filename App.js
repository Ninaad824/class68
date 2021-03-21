
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Screens/search';
import Transaction from './Screens/Transactions';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component {
  render(){
    return (
      <TabNavigator/>

      );
  }
  
}

const TabNavigator = createBottomTabNavigator({

  Transaction:Transaction,
  Search:Search
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

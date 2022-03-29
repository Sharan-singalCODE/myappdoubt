import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase';
export default class Loading extends React.Component{
  componentDidMount(){
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn=()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.navigation.navigate('Home')

      }
      else{
        this.props.navigation.navigate('Login')
      }
    })
  }
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading..</Text>
      </View>
    )
  }

  }
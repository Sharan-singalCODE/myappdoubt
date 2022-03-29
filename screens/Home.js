import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default class Home extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

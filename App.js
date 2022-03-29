import * as React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/LoginScreen';
import Loading from './screens/LoadingScreen';
import Home from './screens/Home';
import firebase from 'firebase';
import { firebaseConfig } from './config';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const Switchnavigator = createSwitchNavigator({
  Loading: Loading,
  Home: Home,
  Login: Login,
});
const Appcontainer = createAppContainer(Switchnavigator);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return <Appcontainer />;
}

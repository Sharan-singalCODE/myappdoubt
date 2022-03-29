import React from 'react';
import Profile from '../screens/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name ="Profile" component={Profile}/>
    <Drawer.Screen name ="Settings" component={Settings}/>
    </Drawer.Navigator>
  )
}
export default DrawerNavigator
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Apploading from 'expo-app-loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from "firebase";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
let users = require("./Temp_profiles.json")
export default class StoryCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      light_theme:true,
      finderID: this.props.finder.id,
      finderData:this.props.finder.data,
    }

  }
  componentDidMount(){
    let theme
    firebase.database().ref("/users/"+firebase.auth().currentUser.uid)
    .on('value',(data)=>{
      theme= data.val().current_theme
    })
    this.setState({
      light_theme:theme==="light"?true:false,
    })
  }
  
  render(){
    return(
      <View style={styles.container}>
 <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i}>
                <Text style={{ textAlign: 'center' }}>{u.name}</Text>
                <Card.Divider/>
              </View>
            );
          })}
        </Card>

        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image source={require('../assets/snack-icon.png')}>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              title="VIEW NOW"
            />
          </Card.Image>
        </Card>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  cardContainerLight: {
    margin: RFValue(13),

    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  titleTextContainer: {
    flex: 0.8
  },
  iconContainer: {
    flex: 0.2
  },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white"
  },
  storyTitleTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "black"
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  storyAuthorTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black"
  },
  descriptionContainer: {
    marginTop: RFValue(5)
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white"
  },
  descriptionTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "black"
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
})
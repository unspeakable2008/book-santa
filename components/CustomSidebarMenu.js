import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from "firebase"
export default class CustomSidebarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {styles.drawerItemsContainer}>
            <DrawerItems {...this.props}></DrawerItems>
                </View>
            <View style = {styles.logOutContainer}>
                <TouchableOpacity style = {styles.logOutButton} onPress = {()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut()
                }
                }><Text>LOGOUT</Text></TouchableOpacity>
            </View>
            </View>

        )
    }
}
var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })
  
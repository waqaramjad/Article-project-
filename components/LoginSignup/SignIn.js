'use strict';
import React, {Component} from "react";
// import {Text, View, Dimensions} from "react-native";
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';
// import myStyles from './App.scss'
import Expo from "expo";

import {Actions} from "react-native-router-flux";
import styles from "./styles";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Navigator } from 'react-native-deprecated-custom-components'
import firebase, { database } from 'firebase';
// import { StackNavigator } from 'react-navigation';


export default class SignIn extends Component {
 
  static navigationOptions = {
    header : null
  }
  constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}

	 signinAction = () => {
   
    var myThis = this
			const {userEmail,userPassword} = this.state;
      // var myNavigator = 	this.props.prop.navigator

			// // console.log(myNavigator)
			// console.log('done')
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then((signedinUser) => {
          
              firebase.database().ref('users/'+signedinUser.user.uid+'/' ).once('value').then(function(snapshot) {
               var checkForUser = snapshot.val()
               console.log(checkForUser.userName)
               var checking = checkForUser.userName
             

              
            
                // console.log('else')
                // alert('Login Success')
              //   myNavigator.push({
              //     title: 'Home' , 
                  
              // })
// console.log()
const { navigate } = myThis.props.prop.navigation; 
// console.log('hu'+myThis.props.prop.navigation)
               var checking = checkForUser.userName
               navigate("DashBoard", {userName: checking})


            
             
             
              });
              // console.log('check'+signedinUser.user.uid)

					
							// console.log('done 2')

            }).catch((err)=>{
              // console.log(err)
							alert(err.message)
						})

    // }

}



 

	
  render() {
    // console.log(this.props)
    const { navigate } = this.props.prop.navigation; 

    return (
      <View style={styles.container}>
        <View style={{marginTop: -15}}>
          <IconInput 	onChangeText={userEmail => this.setState({userEmail})}
 placeholder="Username" image={require("@images/icon-user.png")}/>

          <IconInput   secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}
 placeholder="Password" image={require("@images/icon-password.png")}/>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
          <Text style={{color: '#aaa', marginRight: 5, fontSize: 12}}>
            Forgot Password?
          </Text>
        </View>

        <ButtonRoundBlue text="Login" onPress={() => this.signinAction()}
/>

      </View>
    );
  }
}
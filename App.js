import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

  NetInfo
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components'
// import Login from './components/LoginSignup/loginSignup'
import Article from './components/Articles/Article'
import {createStackNavigator ,createAppContainer } from 'react-navigation';
import DashBoard from './components/home/DashBoard'


// var config = {
//   apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
//     authDomain: "waqarchatapp.firebaseapp.com",
//     databaseURL: "https://waqarchatapp.firebaseio.com",
//     projectId: "waqarchatapp",
//     storageBucket: "waqarchatapp.appspot.com",
//     messagingSenderId: "676235345078"};
// firebase.initializeApp(config);


 const App = createStackNavigator({
   DashBoard: {screen: DashBoard},
   Article: {screen: Article},
  //  Login: {screen: Login},
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;


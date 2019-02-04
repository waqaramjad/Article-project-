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
import SingleArticle from './components/Articles/SingleArticle'
import {createStackNavigator ,createAppContainer } from 'react-navigation';
import DashBoard from './components/home/DashBoard'
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';



firebase.database().ref('/articles/').on('value' , function(snapshot) {
// console.log(snapshot)
console.log('myVal 1')
var myVal = snapshot.val()

 AsyncStorage.setItem("myVal", JSON.stringify(myVal));
// _storeData = async (myVal) => {
//   try {
//     console.log(myVal)
//     console.log('myVal')
//     await AsyncStorage.setItem('data', myVal);
//   } catch (error) {
//     // Error saving data
//   }
// };

})


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
   SingleArticle: {screen: SingleArticle},
   Article: {screen: Article},
  //  Login: {screen: Login},
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;


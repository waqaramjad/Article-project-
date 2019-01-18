// import React, { Component } from 'react';
// import { StyleSheet,Animated,  View,AppRegistry,TouchableHighlight,  FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
// import firebase from 'firebase';
// import { Navigator } from 'react-native-deprecated-custom-components'
// import {Actions} from "react-native-router-flux";
// import {   Accordion , Container, Header,Item ,  Segment,Icon , Input,  Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
// import Expo from "expo";
// // import styles from '../styling/globalStyles.js'
// import ImageRotate from 'react-native-image-rotate';

// const SOURCE_IMAGE = 'https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg';

// const dataArray = [
//   { title: "General Project", content: {tEL:'984198188894', ENo:'EP68168546' , STName : 'SN 484'} },
//   { title: "Lahore Ptoject", content:{tEL:'15681819', ENo:'PKdsf68168546' , STName : 'OSN 784'} },
//   { title: "June Project", content:{tEL:'984198188894', ENo:'LS6vsdv8168546' , STName : 'KN 184'} } , 
//   // { title: "Third Element", content:  }
// ];

// var Mt 
// export default class Home extends Component { 

   
//   componentWillMount() {
//     this.animatedValue = new Animated.Value(0);
//   }
//   componentDidMount() {
//     Animated.timing(this.animatedValue, {
//       toValue: 1,
//       duration: 150
//     }).start()
//   }
  
  
//   render() {
//     const interpolateRotation = this.animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '360deg'],
//     })
//     const animatedStyle = {
//       transform: [
//         { rotate: interpolateRotation }
//       ]
//     }
//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.box, animatedStyle]}>
//           <Text style={styles.text}>Spinner</Text>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#333',
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   text: {
//     color: "#FFF"
//   }
// });
 


















import React, { Component } from 'react';
import { StyleSheet,Animated,  View,AppRegistry,TouchableHighlight, Easing ,  FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {   Accordion , Container, Header,Item ,  Segment,Icon , Input,  Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import Expo from "expo";
// import styles from '../styling/globalStyles.js'
import ImageRotate from 'react-native-image-rotate';

const SOURCE_IMAGE = 'https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg';

const dataArray = [
  { title: "General Project", content: {tEL:'984198188894', ENo:'EP68168546' , STName : 'SN 484'} },
  { title: "Lahore Ptoject", content:{tEL:'15681819', ENo:'PKdsf68168546' , STName : 'OSN 784'} },
  { title: "June Project", content:{tEL:'984198188894', ENo:'LS6vsdv8168546' , STName : 'KN 184'} } , 
  // { title: "Third Element", content:  }
];

var Mt = 0 
export default class Home extends Component { 


  constructor () {
 
    super()
 
    this.RotateValueHolder = new Animated.Value(0);
 
  }
 
  componentDidMount() {
 
// if(Mt==0)
    this.StartImageRotateFunction();
//  Mt++
  }
 
StartImageRotateFunction () {
 
  this.RotateValueHolder.setValue(0)
  
  Animated.timing(
    this.RotateValueHolder,
    {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear
    }
  ).start()
 
}
  render() {
 
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '45deg']
    })
 
    return (
      <View style={styles.container}>
       
       <Animated.Image
        style={{
          width: 250,
          height: 230,
          transform: [{rotate: RotateData}] }}
          source={{uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Butterfly.png'}} />
 
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
 
  container: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
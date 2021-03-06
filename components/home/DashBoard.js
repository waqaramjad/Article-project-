import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList, ImageBackground ,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'
import HTML from 'react-native-render-html';
import {AsyncStorage} from 'react-native';
// import { Permissions, Notifications } from 'expo';
// impor  t DeviceInfo from 'react-native-device-info';
import { Permissions, Notifications } from 'expo';
var config = {
  apiKey: "AIzaSyBvPD_nMwTS8AZ2CPC65OyKu5s1XulUW_4",
    authDomain: "go-ministries-app.firebaseapp.com",
    databaseURL: "https://go-ministries-app.firebaseio.com",
    projectId: "go-ministries-app",
    storageBucket: "go-ministries-app.appspot.com",
    messagingSenderId: "110885403273"
  
  };
firebase.initializeApp(config);


const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;


export default  class DashBoard extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true , 
     
      };
      // const uniqueId = DeviceInfo.getUniqueID();
      // console.log(uniqueId)
     
  }


  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  
  
  }

componentDidMount(){
var that = this
// firebase.auth().signInAndRetrieveDataWithEmailAndPassword('waqaramjad345@gmail.com' , '000000' ).then(user=>{

console.log('check inside')
// console.log('check inside', user)
  that.registerForPushNotificationAsync()
// })

}
  // for allow users 
  registerForPushNotificationAsync = async()=>{
// console.log('user' , user.user.uid)

// var myUID = user.user.uid
// console.log('user' , user.uid)
    console.log('notification')
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      console.log('finalStatus', finalStatus)
      
      // only ask if permissions have not already been determined, because
      // iOS won't necessarily prompt the user a second time.
      // if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        // console.log('existingStatus', existingStatus)
    //   const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //   finalStatus = status;
    // }
  
    // Stop here if the user did not grant permissions
    // if (finalStatus !== 'granted') {
    //   console.log('finalStatus granted' ,finalStatus )
    //   return;
    // }
    
    console.log('user.uid')
    // console.log(user.uid)
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    var shortToken = token 
    // console.log(shortToken.replace('[',''))
    // console.log(shortToken.replace(']',''))

    var first = shortToken.replace('[','')
    var second = first.replace(']','')
    console.log('second' , second)
    
    console.log(shortToken)
    console.log(token)
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("tokenText", second);

    console.log('token 2', token)
    console.log('token 2', token)
  }

  
  
    render() {
      if (this.state.loading) {
        return <Expo.AppLoading />;
      }
      const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

      const { navigate  , state} = this.props.navigation; 
      console.log( 'xstate.params.screen')
      return (
        
        <Container>
           <StatusBar hidden={true} />
         <Header style = {gstyles.mainNav}>
          
         <Body>

<Text style={{color:'white' ,fontWeight: 'bold' , marginTop : '2%' , marginLeft: '2%' , fontSize:23 }}>Welcome To Go Ministries</Text>
</Body>

          {/* <Right/> */}
        </Header>
        <Content>
        <Grid>
    <Col>
    


    {/******************************* image 1 start ******************/}
<Card style={styles.colOne} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/GOSeminary.jpeg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Seminary"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}>Go Seminary </Text>

               </Button>
    </View>
</ImageBackground>
            </CardItem>
          
          </Card>
 
    {/******************************* image 1 end ******************/}


                {/******************************* image 2 start ******************/}
<Card style={styles.colOne} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/GOMedical.jpeg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Medical"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}>Go Medical </Text>

               </Button>
    </View>
</ImageBackground>
  
            </CardItem>
          
          </Card>
    {/******************************* image 2 end ******************/}
    {/******************************* image 3  start ******************/}
    <Card style={styles.colOne} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/GOSports.jpeg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Sports"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}>Go Sports </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>

    {/******************************* image 3 end ******************/}
          
    </Col>
    <Col>
   
          
          <Card style={styles.colTwo} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/ChurchPlanting.jpeg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "ChurchPlanning"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Church Planting </Text>

               </Button>
    </View>
</ImageBackground>
            </CardItem>
          
          </Card>



          <Card style={styles.colTwo} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/CommunityDevelopment.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "CommunityDevelopment"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Community Development </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>

          

          <Card style={styles.colTwo} transparent>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/mainScreen/KingdomBusiness.jpeg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "KingdomBusiness"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}>Kingdom Business </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>
          
    </Col>
</Grid>
{/* <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} /> */}
        </Content>
      </Container>
            
      

      );
    }
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      
    },

    imageUIOfCard : {

height:203,
width:null ,
flex: 1
    } , 
buttonUI : {
  color:'white' , 
  fontSize : 20 , 
  fontWeight : 'bold'

} , 
buttonTextUI : {
  color:'white' , 
  fontSize : 15 , 
  fontWeight : 'bold'

} , 

routeButton : {
  height:200,
  width:null ,
    flex: 1
} , 

ButtonandBackgroundView : {

  backgroundColor:'rgba(0,0,0,.6)',
                height:200,
                width:null ,
                  flex: 1


} , 
colOne : {
marginBottom : -2
} , 
colTwo :{
  marginBottom : -1

}
  
  })
  

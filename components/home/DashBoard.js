import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList, ImageBackground ,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'



export default  class DashBoard extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true , 
     
      };
   
    
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


 

  
  
  
    render() {
      if (this.state.loading) {
        return <Expo.AppLoading />;
      }

      const { navigate } = this.props.navigation; 
      
      return (
        
        <Container>
           <StatusBar hidden={true} />
         <Header style = {gstyles.mainNav}>
          
          <Body/>
          <Right/>
        </Header>
        <Content>
        <Grid>
    <Col>
    


    {/******************************* image 1 start ******************/}
<Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/seminary.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Seminary"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Seminary </Text>

               </Button>
    </View>
</ImageBackground>
            </CardItem>
          
          </Card>

    {/******************************* image 1 end ******************/}


                {/******************************* image 2 start ******************/}
<Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/Medical.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Medical"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Medical </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>
    {/******************************* image 2 end ******************/}
    {/******************************* image 3  start ******************/}
    <Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/sports.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Sports"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Sports </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>

    {/******************************* image 3 end ******************/}
          
    </Col>
    <Col>
   
          
          <Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/ChurchPlanting.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "ChurchPlanting"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Church Planting </Text>

               </Button>
    </View>
</ImageBackground>
            </CardItem>
          
          </Card>



          <Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/CommunityDevelopment.png')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "CommunityDevelopment"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}> Community Development </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>

          

          <Card>
            
            <CardItem cardBody>
              <ImageBackground source={require('../../assets/home/Kingdombusiness.jpg')} style=
              {styles.imageUIOfCard}>
    <View style={styles.ButtonandBackgroundView}>
        <Button transparent full  onPress={()=>{navigate("Article", {screen: "Kingdombusiness"})}} style={styles.routeButton} >
                 
                 <Text style= {styles.buttonTextUI}>Kingdom business </Text>

               </Button>
    </View>
</ImageBackground>

            </CardItem>
          
          </Card>
          
    </Col>
</Grid>
          
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

height:200,
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


}
  
  })
  

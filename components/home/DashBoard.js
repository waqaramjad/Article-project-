import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'

// var myUId = ''


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
          {/* <Left>
          
            <Button transparent  onPress={()=>{navigate("Home", {screen: "Screen Two"})}} >
              <Icon name="arrow-back" />
            </Button>
          </Left> */}
          <Body/>
          <Right/>
        </Header>
        <Content>
        <Grid>
    <Col>
    <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/seminary.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "Seminary"})}} >
                 
                  <Text> Seminary </Text>
                 
                </Button>
              </Body>
             
            </CardItem>
          </Card>
    <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/sports.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "Sports"})}} >
                 
                  <Text> Sports </Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
    <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/Medical.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "Medical"})}} >
                 
                  <Text> Medical </Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          
    </Col>
    <Col>
   
          <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/ChurchPlanting.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "ChurchPlanting"})}} >
                 
                  <Text> Church Planting </Text>

                </Button>
              </Body>
             
            </CardItem>
          </Card>
          <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/CommunityDevelopment.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "CommunityDevelopment"})}} >
                 
                  <Text> Community Development </Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          <Card>
            
            <CardItem cardBody>
              {/* <Image source={{uri: '../../assets/NavScreen/profile.png'}} style={{height: 200, width: null, flex: 1}}/> */}
              <Image source={require('../../assets/home/Kingdombusiness.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Button transparent full  onPress={()=>{navigate("Article", {screen: "Kingdombusiness"})}} >
                 
                  <Text> Kingdom business </Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
    </Col>
</Grid>
          
        </Content>
      </Container>
            
      

      );
    }
  }
  

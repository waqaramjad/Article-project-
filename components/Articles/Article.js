import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'


var route = ''
var data = "" ; 
var title = ''
var content  = ''
export default  class Article extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true , 
      title : '' , 
      content : ''
     
      };
      const { state, navigate } = this.props.navigation;

       route = state.params.screen
      console.log(route)
var myThis = this
      firebase.database().ref('articles/'+route+'/').on('value' , function(snapshot) {
        console.log(snapshot.val())
        data  = snapshot.val()
        console.log(data.content)
      var    title= data.title
      var    content= data.content
      myThis.setState({
            title : title , 
            content : content , 
         })
  
      
      })
  
    
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
      var myThis = this ;
      return (
        
        <Container>
           <StatusBar hidden={true} />
        <Header style = {gstyles.mainNav}>
          <Left>
          
            <Button transparent  onPress={()=>{navigate("DashBoard", )}} >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>

            <Text style={{color:'white' ,fontWeight: 'bold' , marginTop : "2%" }}>{route}</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        
    {/* ******************************************** card no 1 ***********************************************/}
    
        <Card>
            
            <CardItem>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {myThis.state.title} </Text>
                  
                
              </Body>
             
            </CardItem>
            <CardItem cardBody>
              <Text> {myThis.state.content} </Text>
            </CardItem>
          </Card>

    {/* ******************************************** card no 2 ***********************************************/}


          <Card>
            
            <CardItem>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {myThis.state.title} </Text>
                  
                
              </Body>
             
            </CardItem>
            <CardItem cardBody>
              <Text> {myThis.state.content} </Text>
            </CardItem>
          </Card>

    {/* ******************************************** card no 3 ***********************************************/}

          <Card>
            
            <CardItem>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {myThis.state.title} </Text>
                  
                
              </Body>
             
            </CardItem>
            <CardItem cardBody>
              <Text> {myThis.state.content} </Text>
            </CardItem>
          </Card>
  
          
        </Content>
      </Container>
            
      

      );
    }
  }
  

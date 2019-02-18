import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'
import {AsyncStorage} from 'react-native';


var route = ''
var data = "" ; 
var title = ''
var content  = ''
var CategoryData = undefined
var token = ''
var tokenText = ''

export default  class Article extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true , 
      title : '' , 
      content : '' , 
      data : undefined , 
      image : '' , 
      DataObject : '' , 
      token : '' , 
      tokenText : ''

     
      };
      var myThis = this
      const { state, navigate } = this.props.navigation;
       route = state.params.screen

      AsyncStorage.getItem("myVal").then((value) => {
        var cnvertTedData = JSON.parse(value)
        CategoryData = cnvertTedData[route]
        this.setState({
          data : CategoryData
        })
      }).done();
      AsyncStorage.getItem("token").then((value) => {
        // var cnvertTedData = JSON.parse(value)
        // CategoryData = cnvertTedData[route]
        token = value
        console.log(value)

        this.setState({
          token : value
        })
      }).done();
      console.log(route)
      AsyncStorage.getItem("tokenText").then((value) => {
        // var cnvertTedData = JSON.parse(value)
        // CategoryData = cnvertTedData[route]
        tokenText = value
        console.log(value)

        this.setState({
          tokenText : value
        })
      }).done();
      console.log(route)

          
          

  
    
  }

  sunscribe(){
// alert('done')
var objectToken = token
var a = ['myToken']
var mytoken = {
  
    pushToken : token
  
}
console.log(mytoken)
  firebase.database().ref('users/'+route+'/'+tokenText+'/').set(mytoken)

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

      console.log(this.state.data)

      
      console.log('CategoryData outside>>' ,CategoryData)
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
         
          <Right>
            <Button onPress={()=>{this.sunscribe()} }transparent >
              <Title>Subscribe</Title>
            </Button>


</Right>
        </Header>
        <Content>
        
    {/* ******************************************** card no 1 ***********************************************/}
      
 
                     { 
     this.state.data!=undefined ?   Object.keys(this.state.data).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    var ObjectData = this.state.data[data]
                    // console.log(this.state.data[data])
                    
                    // var todos= this.state.Seminary[data]
                    console.log('data')
                    console.log(data)
                    console.log('index')
                    console.log(index)
                    return(
                      <Card  >
            
            <CardItem button id={index} onPress={()=>{navigate("SingleArticle", {screen: ObjectData  } , {screenTitle : route})}}>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {ObjectData.title} </Text>
            {/* </TouchableOpacity> */}
                  
                
              </Body>
             
            </CardItem >
            <CardItem cardBody button onPress={()=>{navigate("SingleArticle", {screen: ObjectData})}}>
            {/* <TouchableOpacity onPress={()=>{navigate("Article", {screen: "Medical"})}}></TouchableOpacity> */}
              <Image style={{width: null, height: 200 , flex: 1}}
          source={{uri:ObjectData.avatarURL }}/>
            </CardItem>
          </Card>
                    )

   })
   : <View style={styles1.textView}><Text style={styles1.noData}>No data to Show </Text></View>
  } 
                     
                              
        

  
          
        </Content>
      </Container>
            
      

      );
    }
  }
  
  const styles1 = StyleSheet.create({

    noData : {
      fontSize : 24
    } ,
    textView :{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    
    }

  })
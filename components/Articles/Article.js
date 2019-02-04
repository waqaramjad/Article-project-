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
      DataObject : ''

     
      };
      var myThis = this

      AsyncStorage.getItem("myVal").then((value) => {
        var cnvertTedData = JSON.parse(value)
        // console.log("Get Value >> ", cnvertTedData);
        // console.log('Get Sports >>' ,cnvertTedData['Sports'])
        CategoryData = cnvertTedData['Sports']
        this.setState({
          data : CategoryData
        })
        // console.log('CategoryData >>' ,CategoryData)
      }).done();
      const { state, navigate } = this.props.navigation;

       route = state.params.screen
      console.log(route)
      // firebase.database().ref('/articles/'+route+'/').on('value' , function(snapshot) {
      //   // console.log(snapshot.val())
      //   data  = snapshot.val()
      //   // var image = data['avatarURL']
      //   var image 
      //   var   title
      //   var myData 
      //   Object.keys(data).map((data1, index) => {
      //  var a =    data[data1]
      //     // console.log(a.avatarURL)
      //     image = a.avatarURL
      //     title = a.title ,
      //     myData = a

          
          

      //   })
        
      // myThis.setState({
      //       title : title , 
      //       content : content , 
      //       image : image , 
      //       DataObject : myData

      //    })
  
      
      // })
  
    
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

      // AsyncStorage.getItem("myVal").then((value) => {
      //   var cnvertTedData = JSON.parse(value)
      //   // console.log("Get Value >> ", cnvertTedData);
      //   console.log('Get Sports >>' ,cnvertTedData['Sports'])
      //   CategoryData = cnvertTedData['Sports']
      //   console.log('CategoryData >>' ,CategoryData)
      // }).done();
      
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
         
          <Right/>
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
            
            <CardItem button  onPress={()=>{navigate("SingleArticle", {screen: this.state.DataObject})}}>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {ObjectData.title} </Text>
            {/* </TouchableOpacity> */}
                  
                
              </Body>
             
            </CardItem >
            <CardItem cardBody button onPress={() => alert("This is Card Body")}>
            {/* <TouchableOpacity onPress={()=>{navigate("Article", {screen: "Medical"})}}></TouchableOpacity> */}
              <Image style={{width: null, height: 200 , flex: 1}}
          source={{uri:ObjectData.avatarURL }}/>
            </CardItem>
          </Card>
                    )

   })
   : null
  } 
                     
                              
        <Card  >
            
            <CardItem button  onPress={()=>{navigate("SingleArticle", {screen: this.state.DataObject})}}>
              
              <Body> 
                
                 
                  <Text style={{fontSize: 15,
      fontWeight: 'bold',}}> {myThis.state.title} </Text>
            {/* </TouchableOpacity> */}
                  
                
              </Body>
             
            </CardItem >
            <CardItem cardBody button onPress={() => alert("This is Card Body")}>
            {/* <TouchableOpacity onPress={()=>{navigate("Article", {screen: "Medical"})}}></TouchableOpacity> */}
              <Image style={{width: null, height: 200 , flex: 1}}
          source={{uri: myThis.state.image }}/>
            </CardItem>
          </Card>

  
          
        </Content>
      </Container>
            
      

      );
    }
  }
  

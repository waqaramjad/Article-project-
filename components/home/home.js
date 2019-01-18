import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {   Accordion , Container, Header,Item ,  Segment,Icon , Input,  Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import Expo from "expo";
import styles from '../styling/globalStyles.js'

const dataArray = [
  { title: "General Project", content: {tEL:'984198188894', ENo:'EP68168546' , STName : 'SN 484'} },
  { title: "Lahore Ptoject", content:{tEL:'15681819', ENo:'PKdsf68168546' , STName : 'OSN 784'} },
  { title: "June Project", content:{tEL:'984198188894', ENo:'LS6vsdv8168546' , STName : 'KN 184'} } , 
  // { title: "Third Element", content:  }
];
// var ArrayForSavingFirebaseValue = []
// var a =
var myUId = ''
var Mt 
var myArray = []
var checkForFirebase = false 
var myValue1
export default class Home extends Component { 

  static navigationOptions = {
    header : null
  }
  
  constructor(props) {
    super(props);
    Mt = this
    this.state = {
      titleText: "Home Screen",
      bodyText: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.',
    ProfileData :{}, 
    loading: true , 
    mythis : this , 
    FormDataFromFirebase : '' , 
    dataArray :  [
      { title: "Data Loading Wait ", content: {tEL:'', ENo:'' , STName : ''} },
      // { title: "Lahore Ptoject", content:{tEL:'15681819', ENo:'PKdsf68168546' , STName : 'OSN 784'} },
      // { title: "June Project", content:{tEL:'984198188894', ENo:'LS6vsdv8168546' , STName : 'KN 184'} } , 
      // { title: "Third Element", content:  }
    ]
    }; 

    const { state, navigate } = this.props.navigation;

    myUId = state.params.UserId
    console.log(state.params.UserId)

    this.functionForBtnCmpltView = this.functionForBtnCmpltView.bind(this)
    firebase.database().ref('users/'+myUId+'/Forms/').on('value' , function(snapshot) {
       myValue1= snapshot.val()  
       console.log(myValue1)
        myArray = []
  Object.keys(myValue1).forEach(function(key) {

    var myObj = myValue1[key]
    var dummy = {}
                        dummy.content = myObj
                        dummy.title = myObj.projectNameText
                        // console.log(key);
                        myArray.push(dummy)
                        // console.log(Mt.state)

                        // console.log(myArray);
      
                      });
// console.log(Mt.state)
                      // if (Mt.state.dataArray !== undefined )
                                            Mt.setState({dataArray: myArray})

                      // checkForFirebase = true
                     

})
    // })
// var myArray = []
//   Object.keys(myValue).forEach(function(key) {

//     var myObj = myValue[key]
//     var dummy = {}
//                         dummy.content = myObj
//                         dummy.title = myObj.projectNameText
//                         console.log(key);
//                         myArray.push(dummy)


//                         console.log(myArray);
      
//                       });

// })
// 'users/'+myUId+'/Forms/'+FormData.projectNameText
// firebase.database().ref('/users/'+myUId).once('value')
    // firebase.database().ref('users/'+myUId+'/Forms/').once('value')
    // // firebase.database().ref('users/'+myUId+'/Forms/'+FormData.projectNameText  ).update(FormData)
    // .then(() => {
    // })

    var mythis = this
//     firebase.database().ref('users/'+myUId+'/Forms/').once('value').then(function(snapshot) {
//       // firebase.database().ref('/users/anPcKVe4aFU5PeQoEo5KztUDTqb2').once('value').then(function(snapshot) {
//                      myValue= snapshot.val()  
//                      console.log(myValue)
//                      mythis.setState({FormDataFromFirebase : myValue})
//                      console.log(dataArray)

//                     //  var ArrayForSavingFirebaseValue = []

//                     var myArray = []
// Object.keys(myValue).forEach(function(key) {
  
//   var myObj = myValue[key]
//   var dummy = {}
//                       dummy.content = myObj
//                       dummy.title = myObj.projectNameText
//                       console.log(key);
//                       myArray.push(dummy)


//                       console.log(myArray);
                    
//                     });
// var obj = {
//   first: "John",
//   last: "Doe"
// };

// //
// //	Visit non-inherited enumerable keys
// //
// Object.keys(obj).forEach(function(key) {

//   console.log(key, obj[key]);

// });
  
        
      // })
    
  

  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false  , dataArray: myArray });
    // Mt.setState({})


//     firebase.database().ref('users/'+myUId+'/Forms/').once('value').then(function(snapshot) {
//       var myValue1= snapshot.val()  
//        console.log(myValue1)
// })
  }

  functionForBtnCmpltView(e , data){

    console.log(e)
    // console.log(myValue1[e])
    var dataOfSelectedForm = myValue1[e]
    const { navigate } = Mt.props.navigation; 
    navigate("ViewEditForm", {id: dataOfSelectedForm})
// Mt.props.navigator.push({title: 'ViewEditForm' , 
// id : dataOfSelectedForm
// })


}

  

  _renderContent(content) {
    console.log(content)
    var mythis = Mt
    // console.log(this.props)
    return (
   
    <Card>
   
    <CardItem>
      <Body>
        <Text>
        Telephone Number : {content.telNoText}
        </Text>
        <Text>
        Street Name : {content.StreetNoText}
        </Text>
        <Text>
        Electric Number : {content.ElecNoText}
        </Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Left/>
      <Body/>
      <Right>
      {/* <Button light id={content.projectNameText} onPress={()=>{Mt.props.navigator.push({title: 'ViewEditForm'})}}  > */}
      {/* <Button light id={content.projectNameText} onPress={()=>{console.log(content.projectNameText)}}  > */}
      {/* <Button light id={content.projectNameText}  onPress={Mt.functionForBtnCmpltView}  > */}
      <Button light   onPress={Mt.functionForBtnCmpltView.bind(this,content.projectNameText)}  >
      <Text style={{color:'black'}}>Complete View </Text>
     </Button>
      </Right>
    </CardItem>
 </Card>
    );
  }
 
editForm(){
  alert('myedit')
  console.log('dfg')
}
      
//     // })
//   }
  check= () =>{

// console.log('check')
//     alert('hy')
const { navigate } = this.props.navigation; 

navigate("Profile", {UserId:myUId})
  }

  surveyForm= () =>{
// console.log('check')
//     alert('hy')
const { navigate } = this.props.navigation; 
navigate("SurveyForm", {UserId:myUId})

  //   this.props.navigator.push({
  //     title: 'SurveyForm'
  // })
  }
  
  
    render() {
  // function  
  // const {navigate} = this.props.navigation;
  // console.log(this.props)
  // console.log(navigate)
  var mythis1 = this
      if (this.state.loading) {
        return <Expo.AppLoading />;
      }

      console.log('checking ')
      // if(checkForFirebase)
      // this.setState({dataArray: myArray})
      // console.log(this.state.dataArray)
      const { state, navigate } = this.props.navigation;

      console.log(state.params.User)
   
      return (
        <Container >
          <StatusBar hidden={true} />
        <Header  style = {styles.mainNav}>
        
         
         
         
          <Body >
          
          <Button  transparent  style={styles1.btnS} onPress={
    this.surveyForm 
  } >
          <Text  style={styles1.btnText}>Create Form</Text>
        </Button>
          </Body>
           <Right  >    
          <Button transparent style={styles1.btnS}  onPress={
    this.check
  } >
          <Thumbnail  source={{uri: "https://kathleenhalme.com/images/humans-clipart-circle-person.png"}} />
        
        </Button>
          </Right>
         
         
        </Header>
         <Header style = {styles.mainNav} searchBar rounded   >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button >
            <Text>Search</Text>
          </Button>
        </Header>
         <Accordion dataArray={Mt.state.dataArray}  
          renderContent={this._renderContent}

          />

          

         


      </Container>

      );
    }
  }
  
  const styles1 = StyleSheet.create({
    btnS : {
     
     
      marginTop : "4%" , 
      
      
    } , 

    btnText : { 
      fontSize : 20 , 
      color:'white'
    }

  })
 
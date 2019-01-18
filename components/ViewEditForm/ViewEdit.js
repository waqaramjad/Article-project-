import React, { Component } from 'react';
import { Picker , Animated , TouchableHighlight , Easing ,  View,AppRegistry,StyleSheet ,  FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
//import {ButtonRoundBlue, IconInput}  from "@controls";
import {   Accordion , Container,ListItem , Icon ,  Header, Content, Item, Input, Label , Form , CheckBox , Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import Expo from "expo";
import { Constants, Location, Permissions } from 'expo';
import { ImagePicker } from 'expo';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import gstyles from '../styling/globalStyles.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { Dropdown } from 'react-native-material-dropdown';
const { width1, height1 } = Dimensions.get('window');

const ASPECT_RATIO = width1 / height1;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
var datafromFirebaseThroughHome   ; 

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];


let HeightDropDown = [
  {  value: ' 25',},
  {  value: ' 30',},
  {  value: ' 35',},
  {  value: ' 40',},
  {  value: ' 45',},
  {  value: ' 50',},

]

let ClassDropDown   = [
  {  value: '1',},
  {  value: '2',},
  {  value: '3',},
  {  value: '4',},
  {  value: '5',},
  {  value: 'H1',},
]

// Normal Attributes 
let FormData
var myUId = '7yAaElAfqSMLhCaZvQ12CokcB033'

var checkbtn = 0


export default class ViewEditForm extends Component { 
  
  constructor(props) {
    super(props);
    const { state, navigate } = this.props.navigation;

    var Fbprops = state.params.id
    // console.log(Fbprops)
    // Fbprops.CopperCrossBox 
    this.state = {
    loading: true , 
    // Asphalt, Concrete, Dirt, Grass
    condition : [ 
      {label:'New', value:0 } , 
      {label:'Good', value:1} , 
      {label:'Needs Replacement', value:2 } , 
      {label:'Double Pole', value:3 } , 
  
  ] , 
  Goundsurface :[
    {label:'Asphalt', value:0 } , 
    {label:'Concrete', value:1 } , 
    {label:'Dirt', value:2 } , 
    {label:'Grass', value:3 } , 


  ] , 
  CopperCable :[
    {label:'Facing Street', value:0 } , 
    {label:'Backing Street', value:1 } , 

  ] , 
  FiberCable :[
    {label:'Facing Street', value:0 } , 
    {label:'Behind Pole', value:1 } , 

  ] , 
  copperCableValue :true , 
  CopperDropsValue :true , 
  CopperTerminalsValue :true , 
  FiberCableValue :true ,   
  FiberDropsValue :true ,   
  FiberTerminalsValue :true , 


  // value of radio button 
  conditionRadioValue  :  Fbprops.conditionRadioValue ,
  GoundsurfaceRadioValue   :  Fbprops.GoundsurfaceRadioValue ,
  CopperCableRadioValue   :  Fbprops.CopperCableRadioValue ,
  CopperDropsValueRadio  :  Fbprops.CopperDropsValueRadio  ,
  CopperTerminalsValueRadio  :  Fbprops.CopperTerminalsValueRadio   ,
  FiberCableRadioValue   :  Fbprops.FiberCableRadioValue   ,
  FiberTerminalsValueRadio  :  Fbprops.FiberTerminalsValueRadio   ,
  FiberDropsValueRadio  :  Fbprops.FiberDropsValueRadio   ,
  SizeRadio : Fbprops.SizeRadio  ,
  GuyAttachmentRadio : Fbprops.GuyAttachmentRadio   ,
  LocationRadio : Fbprops.LocationRadio   ,
  AnchorOwnerRadio : Fbprops.AnchorOwnerRadio   ,
  AnchorSizeRadio : Fbprops.AnchorSizeRadio   ,
  

  // checkbox child 
  CopperCrossBox:Fbprops.CopperCrossBox   , 
  FiberHubBox  :Fbprops.FiberHubBox   , 
  PrimaryElecrtic :Fbprops.PrimaryElecrtic   , 
  OtherCable1 :Fbprops.OtherCable1   , 
  SecondaryElectric:Fbprops.SecondaryElectric   , 
  ForeignGuyLine :Fbprops.ForeignGuyLine   , 
  ElectricTransformer :Fbprops.ElectricTransformer   , 
  OtherCable2:Fbprops.OtherCable2   , 
  StreetLight:Fbprops.StreetLight   , 
  PoliceDetail:Fbprops.PoliceDetail   , 


  // checkbox input box
  AnyString :  true    ,       
  Quantity :  true    , 
  printForm : false  ,  
  
  
  // Guy and Anchor  //Section Header
   
  // None, 6M, 10M, 16M,
  Size : [ 
    {label:'None ', value: 0} , 
    {label:' 6M', value:1 } , 
    {label:'10M ', value:2 } , 
    {label:'16M ', value:3 } , 
    

] ,
GuyAttachment : [ 
    {label:'PAG ', value: 0} , 
    {label:'SWAG ', value:1 } , 
    {label:'PPG ', value:2 } , 
    {label:' Tree', value:3 } , 
    

] ,
// Behind, Left, Right, Across
Location : [ 
  {label:'Behind ', value: 0} , 
  {label:' Left', value:1 } , 
  {label:' Right', value:2 } , 
  {label:' Across', value:3 } , 
  

], 
// Joint, Sole , Foreign
AnchorOwner : [ 
  {label:'Joint ', value: 0} , 
  {label:' Sole', value:1 } , 
  {label:' Foreign', value:2 } , 
   
  

], 
// Anchor Size
// 1" TTA, 5/8" DTA
AnchorSize : [ 
  {label:'1" TTA ', value: 0} , 
  {label:' 5/8" DTA', value:1 } , 
   
  

], 


 

startrotateAngle : "0deg",
endrotateAngle : "0deg",


// Map states
region: {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
},
markers: [],

// form fields 

projectNameText : Fbprops.projectNameText , 
 telNoText   : Fbprops.telNoText , 
   ElecNoText : Fbprops.ElecNoText , 
  RouteNoText  : Fbprops.RouteNoText , 
  StreetNoText  : Fbprops.StreetNoText , 
    CopperCableText: Fbprops.CopperCableText , 
   CopperDropsText : Fbprops.CopperDropsText , 
   CopperTerminalText : Fbprops.CopperTerminalText , 
  FiberCableText  : Fbprops.FiberCableText , 
   FiberDropsText : Fbprops.FiberDropsText , 
  FiberTerminalsText  : Fbprops.FiberTerminalsText , 
   OtherCable1TextBox : Fbprops.OtherCable1TextBox , 
  PoliceDetailText  : Fbprops.PoliceDetailText , 
    TreeTreemingText: Fbprops.TreeTreemingText , 
    NotesNandsafetyText : Fbprops.NotesNandsafetyText , 
    FormEmail : Fbprops.FormEmail , 


  // edit form attribute 

    disableValue : true , 
    PickerVal : false , 
    // firebaseDataObject : this.props.id

    // image rotattion 
startImage : 0 ,
EndImage : 0 , 


poleTag : '' , 
polefull : '' , 
UkEquipment : '' , 



  };
this.RotateValueHolder = new Animated.Value(0);
this.rotateRight = this.rotateRight.bind(this)
this.rotateLeft = this.rotateLeft.bind(this)

  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  static navigationOptions = {
    header : null
  }
 

  check= () =>{
console.log('check')
    alert('hy')
  
  }

  CopperCrossBox(){
      this.setState({CopperCrossBox:!this.state.CopperCrossBox})
  }
  FiberHubBox(){
      this.setState({FiberHubBox:!this.state.FiberHubBox})
  }
  PrimaryElecrtic(){
      this.setState({PrimaryElecrtic:!this.state.PrimaryElecrtic})
  }
  OtherCable1(){
      this.setState({OtherCable1:!this.state.OtherCable1 , AnyString : !this.state.AnyString})
      // this.setState({OtherCable1:!this.state.OtherCable1})
      
  }
  SecondaryElectric(){
      this.setState({SecondaryElectric:!this.state.SecondaryElectric})
  }
  ForeignGuyLine(){
      this.setState({ForeignGuyLine:!this.state.ForeignGuyLine})
  }
  ElectricTransformer(){
      this.setState({ElectricTransformer:!this.state.ElectricTransformer})
  }
  OtherCable2(){
      this.setState({OtherCable2:!this.state.OtherCable2 ,Quantity: !this.state.Quantity })
  }
  StreetLight(){
      this.setState({StreetLight:!this.state.StreetLight})
  }
  PoliceDetail(){
      this.setState({PoliceDetail:!this.state.PoliceDetail})
  }
 
  mycheck(){
    console.log('hy')
    return(
      <Text>hy </Text>
    )
  }

  sendDataToFirebase(){

 FormData = { 

  projectNameText : this.state.projectNameText ,
   telNoText : this.state.telNoText , 
   ElecNoText : this.state.ElecNoText , 
   RouteNoText : this.state.RouteNoText       , 
   StreetNoText : this.state.StreetNoText       , 
   CopperCableText : this.state.CopperCableText       , 
   CopperDropsText : this.state.CopperDropsText       , 
   CopperTerminalText : this.state.CopperTerminalText       , 
   FiberCableText  : this.state.FiberCableText       , 
   FiberDropsText : this.state.FiberDropsText       , 
   FiberTerminalsText : this.state.FiberTerminalsText       , 
   OtherCable1TextBox : this.state.OtherCable1TextBox       , 
   PoliceDetailText : this.state.PoliceDetailText       , 
   TreeTreemingText : this.state.TreeTreemingText       , 
   NotesNandsafetyText: this.state.NotesNandsafetyText       , 
   FormEmail: this.state.FormEmail       , 
   // checkBox 
   CopperCrossBox  :   this.state.CopperCrossBox       , 
   FiberHubBox  :   this.state.FiberHubBox       , 
   PrimaryElecrtic  :   this.state.PrimaryElecrtic       , 
   OtherCable1  :   this.state.OtherCable1       , 
   SecondaryElectric :   this.state.SecondaryElectric       , 
   ForeignGuyLine  :   this.state.ForeignGuyLine       , 
   ElectricTransformer :   this.state.ElectricTransformer       , 
   OtherCable2  :   this.state.OtherCable2       , 
   StreetLight :   this.state.StreetLight       , 
   PoliceDetail :   this.state.PoliceDetail       , 
        // radio buttons 

        conditionRadioValue   :  this.state.conditionRadioValue    ,        
        GoundsurfaceRadioValue :  this.state.GoundsurfaceRadioValue    ,        
        CopperCableRadioValue :  this.state.CopperCableRadioValue    ,        
        CopperDropsValueRadio :  this.state.CopperDropsValueRadio    ,        
        CopperTerminalsValueRadio :  this.state.CopperTerminalsValueRadio    ,        
        FiberCableRadioValue :  this.state.FiberCableRadioValue    ,        
        FiberTerminalsValueRadio  :  this.state.FiberTerminalsValueRadio    ,        
        FiberDropsValueRadio  :  this.state.FiberDropsValueRadio    ,        
        SizeRadio  :  this.state.SizeRadio    ,        
        GuyAttachmentRadio :  this.state.GuyAttachmentRadio    ,        
        LocationRadio  :  this.state.LocationRadio    ,        
        AnchorOwnerRadio  :  this.state.AnchorOwnerRadio    ,        
        AnchorSizeRadio  :  this.state.AnchorSizeRadio    ,        
            // :  this.state.    ,        
            // :  this.state.    ,        
            // :  this.state.    ,        

 }

 firebase.database().ref('users/'+myUId+'/Forms/'+FormData.projectNameText  ).update(FormData)
                    .then(() => {
                    })


  }
//   componentDidMount(){
// this.setState({
//   printForm : false
// })
// console.log(this.state.printForm)
//   }
componentDidMount() {
 
  // if(Mt==0)
      this.StartImageRotateFunction();
        var storage = firebase.storage();
  var pathReference = storage.ref();
  console.log(pathReference)
var formName = this.state.projectNameText
  var poleTag = pathReference.child(myUId+'/'+formName+'/poleTag');
  var polefull = pathReference.child(myUId+'/'+formName+'/polefull');
  var UkEquipment = pathReference.child(myUId+'/'+formName+'/UkEquipment');
var state = this
// Get the download URL
/*************************** Pic 1 ************************/

poleTag.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  console.log(url)
  state.setState({
    poleTag : url 
  })
  
}).catch(function(error) {
console.log(error)
state.setState({
  polefull : url 
})
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
 
});
/*************************** Pic 2 ************************/

polefull.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  console.log(url)
  state.setState({
    UkEquipment  : url 
 })
}).catch(function(error) {
console.log(error)
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
 
});
/*************************** Pic 3 ************************/

UkEquipment.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  console.log(url)
}).catch(function(error) {
console.log(error)
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
 
});

  //  Mt++
    }
   
  StartImageRotateFunction () {
   
    this.RotateValueHolder.setValue(0)
    
    Animated.timing(
      this.RotateValueHolder,
      {
        toValue: 1,
        duration: 150,
        easing: Easing.linear
      }
    ).start()
   
  }


  /// Map Functions

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }


  rotateRight(){
    console.log(this.state)
var start = this.state.startImage
var end = this.state.EndImage

start = start+45
end = end+45

var newStart = start+"deg"
var newEnd = end+"deg"
console.log( "newstart " + newStart  + " newEnd " + newEnd )
console.log('start '+ start + "  end  " + end )
    this.setState({startImage : start ,EndImage : end })
    this.setState({startrotateAngle : newStart,
endrotateAngle : newEnd,
})
  }
  rotateLeft(){
    console.log(this.state)
var start = this.state.startImage
var end = this.state.EndImage

start = start-45
end = end-45

var newStart = start+"deg"
var newEnd = end+"deg"
console.log( "newstart " + newStart  + " newEnd " + newEnd )
console.log('start '+ start + "  end  " + end )
    this.setState({startImage : start ,EndImage : end })
    this.setState({startrotateAngle : newStart,
endrotateAngle : newEnd,
})
  }

  onChooseImagePress = async (imageName ) => {
    console.log(imageName)
    let result = await ImagePicker.launchCameraAsync();
    //let result = await ImagePicker.launchImageLibraryAsync();
    if(imageName=='poleTag'){
      this.setState({
        poleTag : result.uri
      })
    }
    else if(imageName=='polefull'){
      this.setState({
        polefull : result.uri
      })
    }
    else if(imageName=='UkEquipment'){
      this.setState({
        UkEquipment : result.uri
      })
    }
  
    if (!result.cancelled) {
  
      console.log(result.uri)
      this.uploadImage(result.uri, imageName)
        .then(() => {
          alert("Success");
          
        })
        .catch((error) => {
          alert(error);
        });
    }
  
  
    // var storage = firebase.storage();
    // var pathReference = storage.ref();
    // console.log(pathReference)
  
  //   var starsRef = pathReference.child('images/img.jpeg');
  
  // // Get the download URL
  // starsRef.getDownloadURL().then(function(url) {
  //   // Insert url into an <img> tag to "download"
  //   console.log(url)
  // }).catch(function(error) {
  // console.log(error)
  //   // A full list of error codes is available at
  //   // https://firebase.google.com/docs/storage/web/handle-errors
   
  // });
  
  }
  
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    
    const { navigate } = this.props.navigation; 

      // console.log(this.state.firebaseDataObject.ElecNoText)
      var data1 = this.state.condition
      var btnSize = 5 
      var myThisForForm = this

      const RotateData = this.RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: [this.state.startrotateAngle , this.state.endrotateAngle]
      })
    
  var testing = 'abc '
      return (
        <Container style={styles.container}>
                  <StatusBar hidden={true} />

        <Header hasSegment style = {gstyles.mainNav} >
          <Left>
          <Button transparent  onPress={()=>{navigate("Home", {screen: "Screen Two"})}} >
              <Icon name="arrow-back" />
              
            </Button>
          </Left>
          <Body/>
          <Right>

              <Button transparent style={styles.spninerBtn} onPress={()=>{this.setState({disableValue:false  ,PickerVal : true })}} first><Text style={styles.txtColor}>Edit</Text></Button>
          </Right>
            
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.sectionHeading} >Project Info </Text>
            </CardItem>
            <CardItem>
              <Body>
                
              <Label style={styles.LabelTextProjectInfo}>Project Name</Label>
              <Item regular>
              <Input  value={this.state.projectNameText} disabled={this.state.disableValue}  onChangeText= {(projectNameText)  => {this.setState({projectNameText})}} />
            </Item>
            
                
              <Label style={styles.LabelTextProjectInfo}>Telephone Number</Label>
              <Item regular>
              <Input placeholder='Telephone #' value={this.state.telNoText}  disabled={this.state.disableValue} onChangeText= { telNoText  => this.setState({ telNoText})} />
            </Item>
            
                
              <Label style={styles.LabelTextProjectInfo}>Electric Number</Label>
              <Item regular>
              <Input placeholder='Eleco #' value={this.state.ElecNoText} disabled={this.state.disableValue}   onChangeText= {  ElecNoText => this.setState({ ElecNoText})}/>
            </Item>
            
                
              <Label style={styles.LabelTextProjectInfo}>Route Name / Number</Label>
              <Item regular>
              <Input placeholder='Route Name' value={this.state.RouteNoText} disabled={this.state.disableValue} onChangeText= { RouteNoText  => this.setState({ RouteNoText})}/>
            </Item>
              <Label style={styles.LabelTextProjectInfo}>Street Name</Label>
              <Item regular>
              <Input placeholder='Street Name' value={this.state.StreetNoText} disabled={this.state.disableValue} onChangeText= { StreetNoText  => this.setState({ StreetNoText})} />
            </Item>
            

{/* <View style={styles.NewDropdownStyle}>
<Dropdown
        
        label='Height'

        
        // labelFontSize="18"
        data={HeightDropDown}
        
      />
      </View>
<View style={styles.NewDropdownStyle}>
<Dropdown
        
        label='Class'

        
        // labelFontSize="18"
        data={ClassDropDown}
        
      />
      </View> */}
<Label style={styles.LabelTextProjectInfo}>Condition</Label>                   
  
<RadioForm
  radio_props={this.state.condition}
  initial={this.state.conditionRadioValue}
  formHorizontal={false}
  labelHorizontal={true}
  disabled={this.state.disableValue}
  animation={false}
  onPress={(value) => {this.setState({conditionRadioValue:value})}}
  labelStyle={{ marginLeft:'2%' }}
  buttonSize={btnSize}
  buttonWrapStyle={{marginRight: 1}}
/>    

<Label style={styles.LabelTextProjectInfo}>Gound surface</Label>                   
   
<RadioForm
  radio_props={this.state.Goundsurface}
  initial={this.state.GoundsurfaceRadioValue}
  formHorizontal={false}
  labelHorizontal={true}
  // buttonColor={styles.radioButton.color}
  animation={false}
  onPress={(value) => {this.setState({GoundsurfaceRadioValue:value})}}
  buttonSize={btnSize}
  disabled={this.state.disableValue}
/>    


              </Body>
            </CardItem>
           
         </Card>
   {/* ********************************************** New Card  ****************************************************/}

         
         <Card>

         <CardItem header>
              <Text style={styles.sectionHeading}>Pole Attachments </Text>
            </CardItem>
            <CardItem>
              <Body>

   {/* **********************************************  start 1 */}
              
              <Label style={styles.labelTextRadio}>Copper Cable</Label>                   
   
   <RadioForm
     radio_props={this.state.CopperCable}
     initial={this.state.CopperCableRadioValue}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({CopperCableRadioValue:value , copperCableValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

<Item regular>
<Label>Quantity</Label>                   

<Input  disabled={this.state.copperCableValue} value={this.state.CopperCableText} disabled={this.state.disableValue} onChangeText= { CopperCableText  => this.setState({CopperCableText })}/>
</Item>
 {/* **********************************************  start 2 */}
                
              <Label style={styles.labelTextRadio}>Copper Drops</Label>                   
   
   <RadioForm
     radio_props={this.state.CopperCable}
     initial={this.state.CopperDropsValueRadio}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({CopperDropsValueRadio:value , CopperDropsValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}



   /> 

<Item regular>
<Label>Quantity</Label>                   

<Input  disabled={this.state.CopperDropsValue} value={this.state.CopperDropsText}  onChangeText= { CopperDropsText  => this.setState({CopperDropsText })}/>
</Item>
 {/* **********************************************  start 3 */}
                
              <Label style={styles.labelTextRadio}>Copper Terminals</Label>                   
   
   <RadioForm
     radio_props={this.state.FiberCable}
     initial={this.state.CopperTerminalsValueRadio}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({CopperTerminalsValueRadio:value , CopperTerminalsValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

<Item regular>
<Label>Quantity</Label>                   

<Input  disabled={this.state.CopperTerminalsValue} value={this.state.CopperTerminalText} onChangeText= {  CopperTerminalText => this.setState({CopperTerminalText })}/>
</Item>
 {/* **********************************************  start 4 */}
                
              <Label style={styles.labelTextRadio}>Fiber Cable</Label>                   
   
   <RadioForm
     radio_props={this.state.FiberCable}
     initial={this.state.FiberCableRadioValue}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({FiberCableRadioValue:value , FiberCableValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

<Item regular>
<Label>Quantity</Label>                   

<Input  disabled={this.state.FiberCableValue}  value={this.state.FiberCableText} onChangeText= { FiberCableText  => this.setState({FiberCableText })}/>
</Item>

 {/* **********************************************  start 5 */}

                
              <Label style={styles.labelTextRadio}>Fiber Drops</Label>                   
   
   <RadioForm
     radio_props={this.state.FiberCable}
     initial={this.state.FiberDropsValueRadio}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({FiberDropsValueRadio:value , FiberDropsValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

<Item regular >
<Label>Quantity</Label>                   

<Input  disabled={this.state.FiberDropsValue} value={this.state.FiberDropsText}  onChangeText= { FiberDropsText  => this.setState({FiberDropsText })}/>
</Item>
 {/* **********************************************  start 6 */}

                
              <Label style={styles.labelTextRadio}>Fiber Terminals</Label>                   
   
   <RadioForm
     radio_props={this.state.FiberCable}
     initial={this.state.FiberTerminalsValueRadio}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({FiberTerminalsValueRadio:value , FiberTerminalsValue: false})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

<Item regular style={styles.qualityInput}>
<Label>Quantity</Label>                   

<Input  disabled={this.state.FiberTerminalsValue} value={this.state.FiberTerminalsText} onChangeText= {  FiberTerminalsText => this.setState({FiberTerminalsText })}/>
</Item>

 {/* **********************************************  checkBox 1  *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.CopperCrossBox}  
            onPress={()=>this.CopperCrossBox()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Copper Cross Box</Text>
            
          </ListItem>
 {/* **********************************************  checkBox 2  *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.FiberHubBox}  
            onPress={()=>this.FiberHubBox()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Fiber Hub Box</Text>
            
          </ListItem>
 {/* **********************************************  checkBox 3 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.PrimaryElecrtic}  
            onPress={()=>this.PrimaryElecrtic()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Primary Elecrtic</Text>
            
          </ListItem>
 {/* **********************************************  checkBox4  *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.OtherCable1}  
            onPress={()=>this.OtherCable1()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}> Other cable </Text>
            
          </ListItem>
          <Item regular >
<Label>Any String</Label>                   

<Input  disabled={this.state.AnyString} value={this.state.OtherCable1TextBox} onChangeText= {  OtherCable1TextBox => this.setState({ OtherCable1TextBox})}/>
</Item>
 {/* **********************************************  checkBox 5 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.SecondaryElectric}  
            onPress={()=>this.SecondaryElectric()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Secondary Electric </Text>
            
          </ListItem>
 {/* **********************************************  checkBox 6 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.ForeignGuyLine}  
            onPress={()=>this.ForeignGuyLine()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}> Foreign Guy Line</Text>
            
          </ListItem>
 {/* **********************************************  checkBox 7 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.ElectricTransformer}  
            onPress={()=>this.ElectricTransformer()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Electric Transformer </Text>
            
          </ListItem>
 {/* **********************************************  checkBox 8 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.OtherCable2}  
            onPress={()=>this.OtherCable2()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Other cable </Text>
            
          </ListItem>
          <Item regular >
<Label>Quantity</Label>                   

<Input  disabled={this.state.Quantity} value={this.state.PoliceDetailText} onChangeText= {  PoliceDetailText => this.setState({PoliceDetailText })}/>
</Item>
 {/* **********************************************  checkBox 9 *******************************************************/}


<ListItem >
            <CheckBox checked={this.state.StreetLight}  
            onPress={()=>this.StreetLight()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}>Street Light </Text>
            
          </ListItem>
 {/* **********************************************  checkBox 10 *******************************************************/}


<ListItem >
            <CheckBox  checked={this.state.PoliceDetail}  
            onPress={()=>this.PoliceDetail()}
            disabled={this.state.disableValue}
            />
            
              <Text  style={styles.LabelCheckBox}> Police Detail</Text>
            
          </ListItem>

          <Label style={styles.LabelTextProjectInfo}>Tree Trimming</Label>
              <Item regular>
              <Input placeholder='String' value={this.state.TreeTreemingText} disabled={this.state.disableValue}  onChangeText= {  TreeTreemingText => this.setState({ TreeTreemingText })} />
            </Item>
          <Label style={styles.LabelTextProjectInfo}>Notes and Safety</Label>
              <Item regular>
              <Input placeholder='String' value={this.state.NotesNandsafetyText} disabled={this.state.disableValue}  onChangeText= { NotesNandsafetyText  => this.setState({NotesNandsafetyText })} />
            </Item>
              </Body>
            </CardItem>
          </Card>
            {/* **********************************************  Guy and Anchor section *******************************************************/}
        

            <Card>
            <CardItem header>
            <Text style={styles.sectionHeading}> Guy and Anchor </Text>
            </CardItem>
            <CardItem>
            <Body>
            {/* <Button onPress= {()=>{console.log('check');  return(
      <Text>hy </Text>
    )}}>
            <Text>press</Text>
            </Button> */}
            {/* <Button onPress= {()=>{this.setState({printForm : true})}}>
            <Text>press</Text>
            </Button> */}
              {/* {
               (function () {
                console.log('first function '+ myThisForForm.state.printForm )
                // console.log(myThisForForm.state.printForm)
                checkbtn++
                if(myThisForForm.state.printForm){
                  checkbtn++
                  console.log(' inside first function '+ myThisForForm.state.printForm )
                  
                  return(
                    <Item>
                  <Text>{checkbtn} </Text>
                  </Item>
                )}
              }())
             
                 

                 

                 
               } */}
              
               {/* {
                  (function () {
                    if(myThisForForm.state.printForm)
                    console.log('set state trye')
                    myThisForForm.setState({printForm:false  })
                    
                  }())
               } */}

     
         {/* />     */}
         
          {/* **********************************************  radio 1   *******************************************************/}
      
         <Label style={styles.LabelTextProjectInfo}>Condition</Label>                   
  
         <RadioForm
           radio_props={this.state.Size}
           initial={this.state.SizeRadio}
           formHorizontal={false}
           labelHorizontal={true}
           
           animation={false}
           onPress={(value) => {this.setState({SizeRadio:value})
          console.log(value)
          
          }}
           labelStyle={{ marginLeft:'2%' }}
           buttonSize={btnSize}
           buttonWrapStyle={{marginRight: 1}}
           disabled={this.state.disableValue}
         />    
         
          {/* **********************************************  radio 2   *******************************************************/}
      
         <Label style={styles.LabelTextProjectInfo}>Guy Attachment</Label>                   
  
         <RadioForm
           radio_props={this.state.GuyAttachment}
           initial={this.state.GuyAttachmentRadio}
           formHorizontal={false}
           labelHorizontal={true}
           
           animation={false}
           onPress={(value) => {this.setState({GuyAttachmentRadio:value})}}
           labelStyle={{ marginLeft:'2%' }}
           buttonSize={btnSize}
           buttonWrapStyle={{marginRight: 1}}
           disabled={this.state.disableValue}
         />    
         
          {/* **********************************************  radio  3  *******************************************************/}
      
         <Label style={styles.LabelTextProjectInfo}>Location</Label>                   
  
         <RadioForm
           radio_props={this.state.Location}
           initial={this.state.LocationRadio}
           formHorizontal={false}
           labelHorizontal={true}
           
           animation={false}
           onPress={(value) => {this.setState({LocationRadio:value})}}
           labelStyle={{ marginLeft:'2%' }}
           buttonSize={btnSize}
           buttonWrapStyle={{marginRight: 1}}
           disabled={this.state.disableValue}
         />    
          {/* **********************************************  radio  4  *******************************************************/}
      
         <Label style={styles.LabelTextProjectInfo}>Anchor Owner</Label>                   
  
         <RadioForm
           radio_props={this.state.AnchorOwner}
           initial={this.state.AnchorOwnerRadio}
           formHorizontal={false}
           labelHorizontal={true}
           
           animation={false}
           onPress={(value) => {this.setState({AnchorOwnerRadio:value})}}
           labelStyle={{ marginLeft:'2%' }}
           buttonSize={btnSize}
           disabled={this.state.disableValue}
           buttonWrapStyle={{marginRight: 1}}
           />     
         
           {/* **********************************************  radio  4  *******************************************************/}
           <Label style={styles.labelTextRadio}>Anchor Size</Label>                   
   
   <RadioForm
     radio_props={this.state.AnchorSize}
     initial={this.state.AnchorSizeRadio}
     formHorizontal={true}
     labelHorizontal={true}
    //  buttonColor={styles.radioButton.color}
     animation={false}
     onPress={(value) => {this.setState({AnchorSizeRadio:value})}}
     buttonSize={btnSize}
       labelStyle={styles.label}
       disabled={this.state.disableValue}

   /> 

                       
           </Body>
            </CardItem>
            
          

         </Card>

            {/* **********************************************  END  Guy and Anchor section *******************************************************/}
            {/* ********************************************** Rotate image section*******************************************************/}
<Card>

<CardItem>
              
             

              
            <View style={styles.rotateimageContainer}>
       
       <Animated.Image
        style={{
          width: 150,
          height: 150,
          marginTop : wp("10%")  ,
          marginLeft : wp("30%")  ,
          transform: [{rotate: RotateData}] }} 
          // marginTop : 4
          source={{uri: 'https://image.ibb.co/bJwzmV/Behind-Foreign.png'}} />
 {/* <a href="https://imgbb.com/"><img src="" alt="Behind-Foreign" border="0" /></a> */}
      </View>

    
            </CardItem>
            <CardItem
            >
      <Item >


<Button primary disabled={this.state.disableValue} style={styles.rtLbtn} onPress={this.rotateLeft} ><Text style={styles.rtbtText}  > Rotate Left  </Text></Button>
<Button primary style={styles.rtRbtn} disabled={this.state.disableValue} onPress={this.rotateRight} ><Text  style={styles.rtbtText} > Rotate Right    </Text></Button>
  </Item>
            </CardItem>
</Card>

<Card>

  
<CardItem header>


              <Text style={styles.sectionHeading} >Pole location </Text>
            </CardItem>
            <CardItem>
              <Body style={styles.bodyContent}>
              <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>
              <Button disabled={this.state.disableValue} primary><Text  style={styles.rtbtText} > Locate Pole  </Text></Button>
              <Text> Longitude
  :   </Text>
              <Text> Latitude
 :   </Text>
              <Text> State
:   </Text>
              <Text> Town / City
 :   </Text>
              <Text> Country
 :   </Text>
              </Body> 
            </CardItem>
        {/* ********************************************** MAP 2*******************************************************/}
            <CardItem>
              <Body style={styles.bodyContent}>
              <Button disabled={this.state.disableValue} primary style={styles.mapbtn}><Text  style={styles.rtbtText} > Neighbouring Pole 1  </Text></Button>
              <Text> Longitude
  :   </Text>
              <Text> Latitude
 :   </Text>
              <Text> SPAN
:   </Text>
              <Text> Clear
 :   </Text>
              </Body>
            </CardItem>
        {/* ********************************************** MAP 3*******************************************************/}
            <CardItem>
              <Body style={styles.bodyContent}>
              <Button disabled={this.state.disableValue} primary><Text  style={styles.rtbtText} > Neighbouring Pole 2  </Text></Button>
              <Text> Longitude
  :   </Text>
              <Text> Latitude
 :   </Text>
              <Text>  SPAN
:   </Text>
              <Text> Clear
 :   </Text>
             
              </Body>
            </CardItem>
            {/* <CardItem> */}
  
        {/* <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={(e) => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView> */}
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap to create a marker of random color</Text>
          </TouchableOpacity>
        </View> */}
    
  {/* </CardItem> */}
        {/* ********************************************** End map *******************************************************/}
             </Card>

        {/* ********************************************** End prt of project  *******************************************************/}
       
               {/* ********************************************** End prt of project  *******************************************************/}
        {/* **********************************************Start of camer section *******************************************************/}

<Card>
<CardItem>
              <Body >

              <Button primary style = {styles.formEndBtn}  onPress={()=>{this.onChooseImagePress("poleTag")}}  ><Text style = {styles.formEndBtnText} > Pole Tag   </Text></Button>
         
         <Image
         style={styles.cameraImage}
         source={{uri: this.state.poleTag}}
       />
        {/* ********************************************** IMAGE 2*******************************************************/}
              <Button primary style = {styles.formEndBtn}  onPress={()=>{this.onChooseImagePress("polefull")}}  ><Text style = {styles.formEndBtnText} > Pole Full View   </Text></Button>
         
         <Image
         style={styles.cameraImage}
         source={{uri: this.state.polefull}}
       />
       
        {/* ********************************************** IMAGE 3*******************************************************/}
              <Button primary style = {styles.formEndBtn}  onPress={()=>{this.onChooseImagePress("UkEquipment")}}  ><Text style = {styles.formEndBtnText} > Unknown Equipmwnt(optional )   </Text></Button>
         
         <Image
         style={styles.cameraImage}
         source={{uri: this.state.UkEquipment}}
       />


              </Body>
            </CardItem>
      </Card>

        {/* ********************************************** end of camera section *******************************************************/}


       
        <Card>
            
            <CardItem>
              <Body >

              <Item regular style = {styles.formEndBtn}>
            <Input placeholder=' Email ' value={this.state.FormEmail} disabled={this.state.disableValue} onChangeText= { FormEmail  => this.setState({ FormEmail })}/>
          </Item>
          <View style= {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', }}>
          {/* <Button primary disabled={this.state.disableValue} style = {styles.formEndBtn} ><Text style = {styles.formEndBtnText} > Email and Save Project </Text></Button> */}
         
          {/* <Button primary disabled={this.state.disableValue} style = {styles.formEndBtn}><Text style = {styles.formEndBtnText}> Save and Create New Survey </Text></Button> */}
          

          <Button primary disabled={this.state.disableValue} style = {styles.formEndBtn}  onPress={()=>{this.sendDataToFirebase()}} ><Text style = {styles.formEndBtnText} > Update </Text></Button>
          </View>
              </Body>
            </CardItem>
           
         </Card>


        </Content>
      </Container>

);
}
}


/// Map Function
ViewEditForm.propTypes = {
  provider: ProviderPropType,
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:'relative',
        width: wp('100%'),
        height: hp('100%'),
     
    } , 
    label : {
          
      marginRight : wp('5%')
    } , 
    labelTextRadio : {
      marginTop: wp('1%') ,  
      marginBottom : wp("1%")
    } , 
    qualityInput :{
      marginTop : wp('1%'), 
      marginBottom : wp("3%")
    } , 
    LabelTextProjectInfo : {
      marginBottom : wp("2%") , 
      marginTop:wp('1%')

    } , 
    LabelCheckBox : {
      marginLeft:wp('2%')
    }, 
    spninerBtn : {
        backgroundColor : '#085280' ,
        
    } ,
    txtColor : {
        
        color : 'white' , 
        fontSize : hp('3%')
      } , 
      
      sectionHeading : {
        fontSize : hp('5.8%')

     } , 
     rotateimageContainer: {
 
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // flex: 1,
      position:'relative',
        width: wp('100%'),
        height: wp('70%'),
      backgroundColor: '#F5FCFF',

    } , 
    rtRbtn : {
      // backgroundColor : "white" , 
marginLeft : wp("23%")


    } , 
    rtLbtn : {
      // backgroundColor : "white" , 

marginLeft : wp("15%")
    } , 

    rtbtText : {
      color: "white"
    } , 
    bodyContentMap  : {
      marginLeft : wp('2%')
    } , 
    mapbtn : {
      marginBottom : wp("4%")
      
          } , 

  formEndBtn :{
    marginBottom : wp("4%")
  } , 
  formEndBtnText : {

    color: "white"

  } , 

  // Map Styling

  containerMap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    width : wp("100%"), 
    height : wp("50%")
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
NewDropdownStyle : {
  width: wp("50%"), 
  marginLeft: 8 
} , 
cameraImage : {
  width : wp("50%") , 
  height : wp("50%")
} , 



    
  });
import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";
import gstyles from '../styling/globalStyles.js'
import HTML from 'react-native-render-html';


const htmlContent = "<p>                                    <a href=\"https://en.wikipedia.org/wiki/File:Internet_map_1024_-_transparent,_inverted.png\" target=\"_blank\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Internet_map_1024_-_transparent%2C_inverted.png/150px-Internet_map_1024_-_transparent%2C_inverted.png\"></a></p><p>An&nbsp;<a href=\"https://en.wikipedia.org/wiki/Opte_Project\" target=\"_blank\">Opte Project</a>&nbsp;visualization of&nbsp;<a href=\"https://en.wikipedia.org/wiki/Routing\" target=\"_blank\">routing paths</a>through a portion of the Internet</p><p><strong>General</strong></p><p><a href=\"https://en.wikipedia.org/wiki/Internet#\" target=\"_blank\"><strong>[show]</strong></a></p><p><a href=\"https://en.wikipedia.org/wiki/Internet_governance\" target=\"_blank\"><strong>Governance</strong></a></p><p><a href=\"https://en.wikipedia.org/wiki/Internet#\" target=\"_blank\"><strong>[show]</strong></a></p><p><a href=\"https://en.wikipedia.org/wiki/Information_infrastructure\" target=\"_blank\"><strong>Information infrastructure</strong></a></p><p><a href=\"https://en.wikipedia.org/wiki/Internet#\" target=\"_blank\"><strong>[show]</strong></a></p><p><strong>Services</strong></p><p><a href=\"https://en.wikipedia.org/wiki/Internet#\" target=\"_blank\"><strong>[show]</strong></a></p><p><strong>Guides</strong></p><p><a href=\"https://en.wikipedia.org/wiki/Internet#\" target=\"_blank\"><strong>[show]</strong></a></p><p><a href=\"https://en.wikipedia.org/wiki/File:Crystal_Clear_app_linneighborhood.svg\" target=\"_blank\"><strong><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Crystal_Clear_app_linneighborhood.svg/16px-Crystal_Clear_app_linneighborhood.svg.png\"></strong></a><strong>&nbsp;</strong><a href=\"https://en.wikipedia.org/wiki/Portal:Internet\" target=\"_blank\"><strong>Internet portal</strong></a><a href=\"https://en.wikipedia.org/wiki/Template:Internet\" target=\"_blank\">v</a><a href=\"https://en.wikipedia.org/wiki/Template_talk:Internet\" target=\"_blank\">t</a><a href=\"https://en.wikipedia.org/w/index.php?title=Template:Internet&amp;action=edit\" target=\"_blank\">e</a><a href=\"https://en.wikipedia.org/wiki/Computer_network\" target=\"_blank\">Computer network</a>&nbsp;types</p><p>                         <a href=\"https://en.wikipedia.org/wiki/File:Data_Networks_classification_by_spatial_scope.png\" target=\"_blank\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Data_Networks_classification_by_spatial_scope.png/250px-Data_Networks_classification_by_spatial_scope.png\"></a></p><ul><li><a href=\"https://en.wikipedia.org/wiki/Nanonetwork\" target=\"_blank\">Nanoscale</a></li><li><a href=\"https://en.wikipedia.org/wiki/Near_field_communication\" target=\"_blank\">Near-field (NFC)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Body_area_network\" target=\"_blank\">Body (BAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Personal_area_network\" target=\"_blank\">Personal (PAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Near-me_area_network\" target=\"_blank\">Near-me (NAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Local_area_network\" target=\"_blank\">Local (LAN)</a></li><li class=\"ql-indent-1\"><a href=\"https://en.wikipedia.org/wiki/Home_network\" target=\"_blank\">Home (HAN)</a></li><li class=\"ql-indent-1\"><a href=\"https://en.wikipedia.org/wiki/Storage_area_network\" target=\"_blank\">Storage (SAN)</a></li><li class=\"ql-indent-1\"><a href=\"https://en.wikipedia.org/wiki/Wireless_LAN\" target=\"_blank\">Wireless (WLAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Campus_network\" target=\"_blank\">Campus (CAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Backbone_network\" target=\"_blank\">Backbone</a></li><li><a href=\"https://en.wikipedia.org/wiki/Metropolitan_area_network\" target=\"_blank\">Metropolitan (MAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Wide_area_network\" target=\"_blank\">Wide (WAN)</a></li><li><a href=\"https://en.wikipedia.org/wiki/Internet_area_network\" target=\"_blank\">Cloud (IAN)</a></li><li><strong>Internet</strong></li><li><a href=\"https://en.wikipedia.org/wiki/Interplanetary_Internet\" target=\"_blank\">Interplanetary Internet</a></li></ul><p><a href=\"https://en.wikipedia.org/wiki/Template:Area_networks\" target=\"_blank\">v</a><a href=\"https://en.wikipedia.org/wiki/Template_talk:Area_networks\" target=\"_blank\">t</a><a href=\"https://en.wikipedia.org/w/index.php?title=Template:Area_networks&amp;action=edit\" target=\"_blank\">e</a></p><p><a href=\"https://en.wikipedia.org/wiki/File:Internet_users_per_100_and_GDP_per_capita.jpg\" target=\"_blank\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Internet_users_per_100_and_GDP_per_capita.jpg/220px-Internet_users_per_100_and_GDP_per_capita.jpg\"></a></p><p>\t</p><p>Internet users per 100 population members and&nbsp;<a href=\"https://en.wikipedia.org/wiki/GDP\" target=\"_blank\">GDP</a>&nbsp;per capita for selected countries.</p><p>The&nbsp;<strong>Internet</strong>&nbsp;(<a href=\"https://en.wikipedia.org/wiki/Contraction_(grammar)\" target=\"_blank\">contraction</a>&nbsp;of&nbsp;<strong>interconnected network</strong>) is the global system of interconnected&nbsp;<a href=\"https://en.wikipedia.org/wiki/Computer_network\" target=\"_blank\">computer networks</a>&nbsp;that use the&nbsp;<a href=\"https://en.wikipedia.org/wiki/Internet_protocol_suite\" target=\"_blank\">Internet protocol suite</a>&nbsp;(TCP/IP) to link devices worldwide. It is a&nbsp;<em>network of networks</em>&nbsp;that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked&nbsp;<a href=\"https://en.wikipedia.org/wiki/Hypertext\" target=\"_blank\">hypertext</a>&nbsp;documents and&nbsp;<a href=\"https://en.wikipedia.org/wiki/Web_application\" target=\"_blank\">applications</a>&nbsp;of the&nbsp;<a href=\"https://en.wikipedia.org/wiki/World_Wide_Web\" target=\"_blank\">World Wide Web</a>&nbsp;(WWW),&nbsp;<a href=\"https://en.wikipedia.org/wiki/Email\" target=\"_blank\">electronic mail</a>,&nbsp;<a href=\"https://en.wikipedia.org/wiki/Voice_over_IP\" target=\"_blank\">telephony</a>, and&nbsp;<a href=\"https://en.wikipedia.org/wiki/File_sharing\" target=\"_blank\">file sharing</a>.</p>";

var route = ''
var Screen = ''
var data = "" ; 
var title = ''
var content  = ''
export default  class SingleArticle extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true , 
      title : '' , 
      content : '' , 
      data : '' , 
      image : ''
     
      };
      const { state, navigate } = this.props.navigation;

   var     route = state.params.screen
        Screen = state.params.screenTitle
        console.log('state.params.screenTitle')
        console.log(state.params.screenTitle)
        console.log('state.params')
        console.log(state.params)
      // console.log(route.editorHtml)
      this.setState({
        data : route.editorHtml
      })
var myThis = this
        
  
    
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


 componentWillReceiveProps(props){
   console.log('props')
  //  console.log(props)
 }

  
  
  
    render() {
      if (this.state.loading) {
        return <Expo.AppLoading />;
      }

      const { state, navigate } = this.props.navigation;

   var     data = state.params.screen
   var htmlContent = data.editorHtml
      var myThis = this ;
      return (
        
        <Container>
<Content>

<StatusBar hidden={true} />
<Header style = {gstyles.mainNav}>
          <Left>
          
            <Button transparent  onPress={()=>{navigate("Article", )}} >
              <Icon name="arrow-back" />
            </Button>
          </Left>

         
          <Body>

<Text style={{color:'white' ,fontWeight: 'bold' , marginTop : "2%" }}>{Screen}</Text>
</Body>

<Right/>
        </Header>

          <Card>
            <CardItem header bordered>
              
               
                <Body>
                  <Text style={{fontSize: 24}}>{data.title}</Text>
                
                </Body>
           
            </CardItem>
            <CardItem cardBody>
            <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />

            </CardItem>
          </Card>
        </Content>
      </Container>
            
      

      );
    }
  }
  

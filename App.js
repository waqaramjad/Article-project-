import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

  NetInfo
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components'
import Home from './components/home/home'
import Login from './components/LoginSignup/loginSignup'
// import Admin from './components/Admin/Admin'
import Profile from './components/profile/profile'
import Article from './components/Articles/Article'
import  SurveyForm from './components/survey form/form'
import ViewEditForm from './components/ViewEditForm/ViewEdit'
import {createStackNavigator ,createAppContainer } from 'react-navigation';
import DashBoard from './components/home/DashBoard'


 const App = createStackNavigator({
   DashBoard: {screen: DashBoard},
   Login: {screen: Login},
   Article: {screen: Article},
   SurveyForm: {screen: SurveyForm},
   Home: {screen: Home},
  Profile: {screen: Profile},
  ViewEditForm: {screen: ViewEditForm},
});

const AppContainer = createAppContainer(App) 
export default AppContainer




// export default class MainScreen extends Component {
// //   console.log('hy ')
// //    createStackNavigator({
// //     Home: {screen: Home},
// //     Profile: {screen: Profile},
// //   });
// // //   // const App = createStackNavigator({
// // //   //   Home: {screen: Home},
// // //   //   Profile: {screen: Profile},
// // //   // });

//   render() {
//     return ( <
//       Navigator initialRoute = {
//         {
//           title: 'Home',
//           index: 0
//         }
//       }
//       // configureScene = {
//       //   (route, routeStack) => {
//       //     if (route.title === 'Search') {
//       //       return Navigator.SceneConfigs.FloatFromBottom
//       //     } else {
//       //       return Navigator.SceneConfigs.FloatFromRight
//       //     }
//       //   }
//       // }





//       renderScene = {
//         (route, navigator) => {

//           if (route.title === 'Login') {
//             return ( <
//               Login navigator = {
//                 navigator
//               }

//               />
//             );
//           }


//           if (route.title === 'Home') {
//             return ( < Home navigator = { navigator }
//               userUID= {route.userUID}

//               />
//             );
//           }

//           // if (route.title === 'Admin') {
//           //   return ( <  Admin navigator = {navigator }

//           //     />
//           //   );
//           // }
//           if (route.title === 'Profile') {
//             return ( <  Profile navigator = {navigator }    />
//             );
//           }
//           if (route.title === 'SurveyForm') {
//             return ( <  SurveyForm navigator = {navigator }    />
//             );
//           }
//           if (route.title === 'ViewEditForm') {
//             return ( <  ViewEditForm navigator = {navigator } 
              
//               id = {route.id}
//               />
//             );
//           }


//         }
//       }
//       />
//     );
//   }
// }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#F5FCFF',
// // //   },
// // //   welcome: {
// // //     fontSize: 30,
// // //     textAlign: 'center',
// // //     margin: 10,
// // //   },
// // //   instructions: {
// // //     textAlign: 'center',
// // //     color: '#333333',
// // //     marginBottom: 5,
// // //   },
// // // });

// // // AppRegistry.registerComponent('UrbanDictionary', () => UrbanDictionary);

console.disableYellowBox = true;

// // // export default UrbanDictionary; 
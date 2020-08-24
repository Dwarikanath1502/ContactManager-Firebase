//TODO: install react-navigation

//TODO: import four screens
import HomeScreen from './screens/HomeScreen'
import AddNewContact from './screens/AddNewContact'
import EditContact from './screens/EditContact'
import ViewContact from './screens/ViewContact'

//TODO: import firebase
import * as firebase from 'firebase'
// TODO:set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBEyJYjqavxsK_DlldkAzwEtkwoVKkGLj4",
  authDomain: "fir-auth-75cdb.firebaseapp.com",
  databaseURL: "https://fir-auth-75cdb.firebaseio.com",
  projectId: "fir-auth-75cdb",
  storageBucket: "fir-auth-75cdb.appspot.com",
  messagingSenderId: "50133202884",
  appId: "1:50133202884:web:ad8792be4ef4d406575691"
};

firebase.initializeApp(firebaseConfig);


//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnQe3h64vxgj346gYoPdv5jMV80uL4TPU',
      authDomain: 'auth-5c286.firebaseapp.com',
      databaseURL: 'https://auth-5c286.firebaseio.com',
      storageBucket: 'auth-5c286.appspot.com',
      messagingSenderId: '552630458779'
    });
  }

  render() {
    return(
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  };
}

export default App;

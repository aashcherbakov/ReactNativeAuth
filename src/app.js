import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnQe3h64vxgj346gYoPdv5jMV80uL4TPU',
      authDomain: 'auth-5c286.firebaseapp.com',
      databaseURL: 'https://auth-5c286.firebaseio.com',
      storageBucket: 'auth-5c286.appspot.com',
      messagingSenderId: '552630458779'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log in</Button>
        );
      case false:
        return <LoginForm />
      default: 
        return <Spinner size='large' />
    }
  }

  render() {
    return(
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  };
}

export default App;

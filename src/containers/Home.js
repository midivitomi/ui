import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class Home extends Component {

  render() {
    return (
      <Image style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: null, height: null }} source={require('./i/splash.jpg')} />
    );
  }
}

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button,Image, AppRegistry } from 'react-native';
import { View, Container, Content, Drawer, Card, CardItem } from 'native-base';
import GetData from './src/GetData';
import Bilim from './src/Kategori/Bilim';
import Eglence from './src/Kategori/Eglence';
import Ekonomi from './src/Kategori/Ekonomi';
import Saglik from './src/Kategori/Saglik';
import Spor from './src/Kategori/Spor';
import Teknoloji from './src/Kategori/Teknoloji';
import Main from './src/Main';
import { DrawerNavigator } from 'react-navigation';

const MyApp = DrawerNavigator({
    Genel: Main,
    Bilim: Bilim,
    Eglence: Eglence,
    Ekonomi: Ekonomi,
    Sağlık: Saglik,
    Spor: Spor,
    Teknoloji: Teknoloji
})

export default class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',

  }
});

AppRegistry.registerComponent('App', () => App);
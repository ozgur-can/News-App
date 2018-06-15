import React, { Component } from 'react';
import { Platform, StyleSheet, Button,Image, AppRegistry,View } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import GetData from './GetData';

export default class App extends Component {

    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <Container>
                <CardItem>
                    <Text>HABERLER</Text>
                </CardItem>
                <GetData/>
              </Container>
        );
      }
}
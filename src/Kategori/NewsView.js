import React, { Component } from 'react';
import { StyleSheet,ImageBackground, ScrollView, View} from 'react-native';
import {List, ListItem, Content, Text, Right, Left, Image, Thumbnail, Body, Container, Button, Card, CardItem, Icon } from 'native-base';
import axios from 'axios';

import Bilim from './Bilim';
import Eglence from './Eglence';
import Ekonomi from './Ekonomi';
import Saglik from './Saglik';
import Spor from './Spor';
import Teknoloji from './Teknoloji';

class NewsView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                  articles : []
            }
        }
    componentWillMount() {
        var query;
        
        if(this.props.category=='business')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=aaf32ed78a9c498f93d6d70a2452d6e8';
        else if(this.props.category=='entartainmet')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=aaf32ed78a9c498f93d6d70a2452d6e8';
        else if(this.props.category=='health')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=aaf32ed78a9c498f93d6d70a2452d6e8';
        else if(this.props.category=='science')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=25c4b24fb9074a7e867be11610fd7473';
        else if(this.props.category=='sports')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=aaf32ed78a9c498f93d6d70a2452d6e8';
        else if(this.props.category=='technology')
        query='https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=aaf32ed78a9c498f93d6d70a2452d6e8';

        axios.get(query).then((response) => {
             console.log(response.data.articles);
               if(response.status) {
                   this.setState({
                      articles: response.data.articles
                   }) 
               }
           })
         }

    newsList() {
        return this.state.articles.map((data, i) => {
          return (        
            <View key={i}>
            <Card>
                <CardItem bordered>
                <Left>
                    <Thumbnail source={{uri:data.urlToImage}}/>
                    <Body>
                    <Text>{data.title}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                <Text style={{textAlign:'center', alignSelf:'stretch'}}>
                    {data.description}
                </Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button rounded success iconLeft small>
                        <Icon name='star'/>
                            <Text>Kaydet</Text> 
                        </Button>
                    </Left>
                    <Right>
                        <Text>{data.source.name}</Text>
                    </Right>
                </CardItem>
                </Card>
        </View>
          )
        })
    }

    render() {
        return(
                <Content>
                    {this.newsList()}
                </Content>
        );
    }
}
export default NewsView;
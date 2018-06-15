import React, { Component } from 'react';
import { StyleSheet,ImageBackground, ScrollView} from 'react-native';
import {List, ListItem, Content, Text, Right, Left, Image, Thumbnail, Body, Container,View, Button, Card, CardItem, Icon } from 'native-base';
import axios from 'axios';

class Eglence extends Component {
    constructor(props) {
        super(props);
            this.state = {
                  articles : []
            }
        }
        componentWillMount() {
             const query='https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=25c4b24fb9074a7e867be11610fd7473';
    
            axios.get(query).then((response) => {
              //console.log(response.data.articles);
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
            <Container>
                <CardItem>
                    <Text>EĞLENCE</Text>
                </CardItem>
                  <Content>
                    {this.newsList()}
                  </Content>
            </Container>
        );
    }
}

export default Eglence;
import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Container, Header, Right, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';


export default class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    const farm = navigation.getParam('farm', 'NO-ID');
    const server = navigation.getParam('server', 'NO-ID');
    const secret = navigation.getParam('secret', 'NO-ID');

    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`;
    //console.log(id + ' ' + farm + ' ' + server + ' ' + secret);

    return (
      <Container>
        <Header>
          <Body>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, }}>ImageView</Text>
          </Body>
          <Right />
        </Header>
        <Body>
          <Image
            resizeMode="cover"
            style={{ flex: 1, width: 300, height: 400 }}
            source={{ uri: url }}
          />
        </Body>
      </Container>
    );
  }
}



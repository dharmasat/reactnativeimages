import React, { Component } from 'react';
import { FlatList, TouchableOpacity,Image } from 'react-native';
import { Container, Header, Right, Card, CardItem, Thumbnail, Text, Left, Body, } from 'native-base';
import { fetchImagesPending, fetchImagesSuccess, fetchImagesError } from '../redux/action';
import { getImagesPending, getImages, getImagesError } from '../redux/reducer';
import fetchImages from './fetchImageData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Use global variable
let navparams;
let searchValue;

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    navparams = this.props.navigation.state;
    searchValue = navparams.params.search;
  }

  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages(searchValue);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    return true;
  }

  render() {
    const { images, error, pending } = this.props;
    return (

      <Container>
        <Header>
          <Body>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, }}>Images</Text>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={images}
          numColumns = {2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <Card transparent >
                <CardItem >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ImageView', { 'id': item.id, 'farm': item.farm, 'server': item.server, 'secret': item.secret })}>
                  <Left>
                    <Image style={{ resizeMode: 'cover', width: 150, height: 150 }} source={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_s.jpg` }} />
                  </Left>
                  </TouchableOpacity>
                </CardItem>
            </Card>
          } />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: getImagesError(state),
  images: getImages(state),
  pending: getImagesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImages: fetchImages
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);

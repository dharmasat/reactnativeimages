import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchText from './src/components/searchText';
import ImageList from './src/components/imagelist';
import ImageView from './src/components/imageview';
import { Provider } from 'react-redux';
import store from './src/redux/store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appstack />
      </Provider>
    );
  }
}

//create stack of screen for navigation
const stackNavigation = createStackNavigator({
  SearchText: {
    screen: SearchText,
    navigationOptions: {
      header: null
    }
  },
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      header: null
    }
  },
  ImageView: {
    screen: ImageView,
    navigationOptions: {
      header: null
    }
  }
});

const Appstack = createAppContainer(stackNavigation);




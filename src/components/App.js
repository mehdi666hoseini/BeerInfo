import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

import BeerList from './BeerList';
import MyHeader from './MyHeader';
import { Icon } from 'native-base';

class App extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = {
    tabBarIcon: <Icon name='list' />
  }

  render() {
    return (

        <View style={{ flex: 1, }}>
          <BeerList />
        </View>

    );
  }
}

export default App;
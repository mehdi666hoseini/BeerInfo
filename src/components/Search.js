import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
// import { connect } from 'react-redux';

import Beer from './Beer';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchContext: '',
      flatListData: [],
    };

    // this.searchTheContext().then(e => { this.setState({ flatListData: e }) })

  }
  static navigationOptions = {
    tabBarIcon: <Icon name='search' />
  }

  searchTheContext = async () => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${this.state.searchContext}`);
      const jsonData = await response.json();
      return jsonData
    }
    catch (err) {
      console.log(`errrrror is: ${err}`)
    }
  }


  render() {
    return (
      <View>
        <TextInput
          style={{ marginHorizontal: '5%' }}
          onChangeText={e => { this.setState({ searchContext: e }); this.searchTheContext().then(e => { this.setState({ flatListData: e }) });  }}
          underlineColorAndroid='blue'
          value={this.state.searchContext}

        />
        <FlatList
          data={this.state.flatListData}
          // renderItem={({ item, index }) => <Beer item={item} />}
          renderItem={({ item, index }) => <Beer item={item} /> }
          ListEmptyComponent={<ActivityIndicator />}

        />

      </View>
    );
  }
}

export default Search;

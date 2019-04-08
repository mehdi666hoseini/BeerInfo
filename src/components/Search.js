import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
// import { connect } from 'react-redux';

import Beer from './Beer';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListData: [],
      searchContext: '',
    };
  }

  static navigationOptions = {
    tabBarIcon: <Icon name='search' />
  }


  searchTheContext = async (q) => {
    let myRe = /\w+/g
    let res = q.match(myRe)
    let finalRes = []
    for (const s of res) {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${s}`);
        const jsonData = await response.json();
        if (Array.isArray(jsonData)) { finalRes = [...finalRes, ...jsonData] }
        else { return ([{ id: '?', name: 'Search Again !' }]) }
      }
      catch (err) {
        console.log(`errrrror is: ${err}`);
      }
    }
    return finalRes
  }


  render() {
    return (
      <View>
        <TextInput
          style={{ marginHorizontal: '5%' }}
          // value={this.state.searchContext}
          onChangeText={e => { this.searchTheContext(e).then(a => { this.setState({ flatListData: a, searchContext: e }) }) }}
          underlineColorAndroid='blue'

        />
        <FlatList
          data={this.state.flatListData}
          renderItem={({ item, index }) => <Beer item={item} />}
          ListEmptyComponent={this.state.flatListData == '' ? <Text>Search smt</Text> : <ActivityIndicator />}

        />

      </View>
    );
  }
}

export default Search;

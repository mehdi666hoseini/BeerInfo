import React, { Component } from 'react';
import { View, Text, FlatList, Modal, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';

import Beer from './Beer';
import { Button } from 'native-base';

import * as AT from '../redux_store/actions/types';
import * as action from '../redux_store/actions/action';
import MyHeader from './MyHeader';
import BeerModal from './BeerModal';

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.fetchBeers().then(beers => { this.props.dispatch(action.updateBeerList(beers)) })

  }

  fetchBeers = async () => {
    try {
      const responce = await fetch(`https://api.punkapi.com/v2/beers?page=${this.props.pageSeen}&per_page=${4}`)
      const json_data = await responce.json()
      return json_data;
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Modal
          onRequestClose={() => this.props.dispatch(action.toggleModal())}
          visible={this.props.modalVisible}
          animationType='slide'
        >
          <BeerModal />
        </Modal>

        <FlatList
          data={this.props.beers}
          renderItem={({ item, index }) => <Beer item={item} />}
          keyExtractor={(item, index) => index}
          numColumns={2}
          columnWrapperStyle={{ flexDirection: 'row' }}
          ListHeaderComponent={<MyHeader title='Beer Info' />}
          ListEmptyComponent={<ActivityIndicator size='large' color='blue' />}
          // onEndReached={() => { this.props.dispatch(action.incPage()); this.refreshBeer.then(e =>{this.props.dispatch(action.updateBeerList(e) )} ) ;console.log(`page is: ${this.props.pageSeen}`); }}
          onEndReached={() => { this.props.dispatch(action.incPage()); this.refreshBeer().then(e => { this.props.dispatch(action.updateBeerList(e)); }); console.log(`page is: ${this.props.pageSeen}`); }}
        />

      </View>
    );
  }

  refreshBeer = async () => {
    responce = await fetch(`https://api.punkapi.com/v2/beers?page=${this.props.pageSeen + 1}&per_page=${4}`)
    json_data = await responce.json()
    // console.log('async')
    return json_data
  }

}





const mapStateToProps = (state) => ({
  beers: state.reducer.beers,
  modalVisible: state.reducer.modalVisible,
  pageSeen: state.reducer.page_seen,
})

export default connect(mapStateToProps)(BeerList);

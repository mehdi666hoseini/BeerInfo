import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import MyHeader from './MyHeader';
import { Card, CardItem, Body, Title } from 'native-base';

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "pink" }}>
        <MyHeader Title='Beer Detail' />
        {/* {alert(this.props.beers[this.props.selected_beer].image_url)} */}
        <Card>
          <CardItem header>
            <Title style={{color:'blue', alignItems:'center'}} >
              {this.props.beer_object.name}
            </Title>
          </CardItem>

          <CardItem style={{ justifyContent: 'center' }}>
            <Image source={{ uri: this.props.beer_object.image_url }} resizeMode="contain" style={{ flex: null, width: '77%', height: 555, }} />
          </CardItem>

          <CardItem>

              <Text style={{lineHeight:33, fontSize:16, color:'black' }}>
                {this.props.beer_object.description}
              </Text>

          </CardItem>
        </Card>

      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => ({
  beer_object: state.reducer.selected_beer,
})

export default connect(mapStateToProps)(BeerModal);

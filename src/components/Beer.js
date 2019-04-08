import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';

import * as actions from '../redux_store/actions/action';



class Beer extends Component {
    render() {
        return (
            <Card style={{ flex: 1, borderRadius: 33, backgroundColor: 'blue' }} >
                <CardItem>
                    <Left>
                        <Body>
                            <Text numberOfLines={1} >{this.props.item.name}</Text>
                            <Text note numberOfLines={1} >{this.props.item.tagline}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{ justifyContent: 'center', backgroundColor: 'white' }}>
                    <Image source={{ uri: this.props.item.image_url }} resizeMode="contain" style={{ height: 222, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.dispatch(actions.selectObject(this.props.item));
                            this.props.dispatch(actions.toggleModal());
                            console.log(this.props.item);

                        }
                        }>
                            <Icon active name="finger-print" />
                            <Text>id: {this.props.item.id}</Text>
                        </Button>
                    </Left>

                </CardItem>
            </Card>

        );
    }
}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Beer);

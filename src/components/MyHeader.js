import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';



export default class MyHeader extends Component {
    render() {
        return (
            <Header style={styles.h}>
                <Title style={styles.b}>{this.props.title}</Title>
            </Header>
        )
    }
}

const styles = StyleSheet.create({

    h: {
        backgroundColor: "white",
        height: 33,
    },
    b: {
        textAlign: 'center',
        color:'black',
        paddingTop: 5,
    }


})
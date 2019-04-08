import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import configureStore from '../redux_store/configureStore';

import App from '../components/App';
import Search from '../components/Search';
import { Icon } from 'native-base';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}


const appTabNavigator = createBottomTabNavigator(
  {
    App: App,
    Search: Search,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: <Icon name='person' />
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }
  }

)

const AppContainer = createAppContainer(appTabNavigator)


export default AppNavigator;

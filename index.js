/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/components/App';
import AppNavigator from './src/navigation/AppNavigator';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppNavigator);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import logModuleInfo from './logModuleInfo';
import {name as appName} from './app.json';

logModuleInfo('index.js file')

AppRegistry.registerComponent(appName, () => App);

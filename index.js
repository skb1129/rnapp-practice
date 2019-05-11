/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import {name} from './app.json';

Navigation.registerComponent(`navigation.${name}`, () => App);

Navigation.events().registerAppLaunchedListener(() => (
  Navigation.setRoot({
    root: {
      component: {
        name: `navigation.${name}`
      }
    }
  })
));

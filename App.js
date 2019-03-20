import React, {Component} from 'react'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import logModuleInfo from './logModuleInfo';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const AppNavigator = createStackNavigator({First,Second,Third,Fourth});

const AppContainer = createAppContainer(AppNavigator);

logModuleInfo('App.js file');

class App extends Component {
  constructor(props) {
    super(props);
    logModuleInfo('App Constructor');
  }

  render() {
    return (
      <AppContainer onNavigationStateChange={logModuleInfo} />
    );
  }
}

export default App;

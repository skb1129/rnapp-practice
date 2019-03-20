import React, {PureComponent} from 'react';
import {View,Button} from 'react-native';

import logModuleInfo from './logModuleInfo';

logModuleInfo('First.js file');

class First extends PureComponent {
  static navigationOptions = {
    title: 'First Screen'
  };

  constructor(props) {
    super(props);
    logModuleInfo('First Constructor');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Button title="Second" onPress={() => this.props.navigation.navigate('Second')} />
        <Button title="Third" onPress={() => this.props.navigation.navigate('Third')} />
        <Button title="Fourth" onPress={() => this.props.navigation.navigate('Fourth')} />
      </View>
    );
  }
}

export default First;

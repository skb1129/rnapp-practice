import React, {PureComponent} from 'react';
import {View,Button} from 'react-native';

import logModuleInfo from './logModuleInfo';

logModuleInfo('Fourth.js file');

class Fourth extends PureComponent {
  static navigationOptions = {
    title: 'Fourth Screen'
  };

  constructor(props) {
    super(props);
    logModuleInfo('Fourth Constructor');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Button title="First" onPress={() => this.props.navigation.navigate('First')} />
        <Button title="Second" onPress={() => this.props.navigation.navigate('Second')} />
        <Button title="Third" onPress={() => this.props.navigation.navigate('Third')} />
      </View>
    );
  }
}

export default Fourth;

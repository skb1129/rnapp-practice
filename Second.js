import React, {PureComponent} from 'react';
import {View,Button} from 'react-native';

class Second extends PureComponent {
  static navigationOptions = {
    title: 'Second Screen'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Button title="First" onPress={() => this.props.navigation.navigate('First')} />
        <Button title="Third" onPress={() => this.props.navigation.navigate('Third')} />
        <Button title="Fourth" onPress={() => this.props.navigation.navigate('Fourth')} />
      </View>
    );
  }
}

export default Second;

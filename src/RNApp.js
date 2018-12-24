import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import AppNavigator from './screens/AppNavigator';

import { COLORS } from './config';

class RNApp extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
        <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

export default RNApp;

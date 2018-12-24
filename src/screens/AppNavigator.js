import { createStackNavigator, createAppContainer } from 'react-navigation';

import { COLORS } from '../config';

import Counter from './counter/Counter';

const AppNavigator = createStackNavigator({
  COUNTER: Counter,
}, {
  initialRouteName: 'COUNTER',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
  },
});

export default createAppContainer(AppNavigator);

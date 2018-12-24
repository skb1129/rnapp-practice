import { createStackNavigator, createAppContainer } from 'react-navigation';

import Counter from './counter/Counter';

const AppNavigator = createStackNavigator({
  COUNTER: Counter,
}, {
  initialRouteName: 'COUNTER',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#51f41e',
    },
  },
});

export default createAppContainer(AppNavigator);

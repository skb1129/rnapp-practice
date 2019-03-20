import {createStackNavigator,createAppContainer} from 'react-navigation';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const AppNavigator = createStackNavigator({First,Second,Third,Fourth});

export default createAppContainer(AppNavigator);
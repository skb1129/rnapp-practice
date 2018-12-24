import { combineReducers } from 'redux';

import CounterReducer from '../screens/counter/CounterReducer';

export default combineReducers({
  counter: CounterReducer,
});

import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const key = 'rnapp';

const config = {
  key,
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const FinalReducer = persistReducer(config, reducers);

const store = createStore(
  FinalReducer,
  applyMiddleware(thunkMiddleware),
);

const persistor = persistStore(store);

const configureStore = () => ({ store, persistor });

export default configureStore;

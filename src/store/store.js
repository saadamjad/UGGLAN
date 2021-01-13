import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import middlewares from './middleware';

import {
  AuthReducer,
  // ProfileReducer
  PaymentMethodReducer,
  HireSomeOneReducer,
  AllContactsReducer,
  UserMessageReducer
} from './reducers';

export const rootReducer = combineReducers({
  AuthReducer,
  // ProfileReducer
  PaymentMethodReducer,
  HireSomeOneReducer,
  AllContactsReducer,
  UserMessageReducer


});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'], // uncomment this line if you want to use persist for navigation
  timeout: null,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, {}, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
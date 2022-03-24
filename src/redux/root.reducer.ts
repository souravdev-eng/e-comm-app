import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {userReducer} from './reducers/user.reducers';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {productReducer} from './reducers/product.reducer';

const authPersistConfig = {
  key: 'auth',
  storage: EncryptedStorage,
  whitelist: ['user'],
};

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  products: productReducer,
});

export const persistReducers = persistReducer(rootConfig, rootReducer);

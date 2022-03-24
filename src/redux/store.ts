import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {persistStore} from 'redux-persist';
import {persistReducers, rootReducer} from './root.reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  persistReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistStores = persistStore(store);

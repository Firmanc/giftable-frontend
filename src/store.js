// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import reducers from 'reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import epics from './epics';

const isProd: boolean = String(process.env.NODE_ENV) === 'production';
const composeEnhancers: Function = isProd ? compose : composeWithDevTools;
const epicMiddleware: Object = createEpicMiddleware(epics);

const persistConfig: Object = {
  key: 'root',
  storage,
};

const persistedReducer: Object = persistReducer(persistConfig, reducers);

export const store: Object = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

export const persistor: Object = persistStore(store);

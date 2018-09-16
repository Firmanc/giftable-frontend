// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import reducers from 'src/reducers';
import epics from './epics';

const isProd: boolean = String(process.env.NODE_ENV) === 'production';
const composeEnhancers: Function = isProd ? compose : composeWithDevTools;
const epicMiddleware: Object = createEpicMiddleware();

export const history: Object = createHistory();

const persistConfig: Object = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const middlewares: Array<any> = [
  epicMiddleware,
  routerMiddleware(history),
];

const persistedReducer: Object = persistReducer(persistConfig, reducers);

export function configureStore(): Object {
  const store: Object = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  epicMiddleware.run(epics);

  return store;
}

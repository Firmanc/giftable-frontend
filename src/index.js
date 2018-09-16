import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from 'src/components';
import Routes from 'src/routes';
import { configureStore, history } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistStore(store)}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);

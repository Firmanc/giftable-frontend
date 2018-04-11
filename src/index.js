import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from 'components';
import { store, persistor, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);

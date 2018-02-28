import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const title = 'My React Webpack Babel Setup';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('app')
);
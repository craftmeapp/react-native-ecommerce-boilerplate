// @flow

import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/Store';
import Root from './src/Containers/Root';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;

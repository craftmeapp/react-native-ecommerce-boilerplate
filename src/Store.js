/* @flow */

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './Reducers';
import rootSaga from './Sagas';


export default () => {
  const rootReducer = combineReducers(reducers);

  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};

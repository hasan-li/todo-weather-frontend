import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  todos: undefined,
  forecast: undefined,
};

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
	window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
	reducers,
  defaultState,
  enhancer,
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

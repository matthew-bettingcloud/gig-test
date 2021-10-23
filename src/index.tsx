import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './state/reducers';
import { watchSetCategories } from './state/sagas/categorySagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSetCategories)

ReactDOM.render(
  	<React.StrictMode>
		<Provider store={store}>
    		<App />
		</Provider>
  	</React.StrictMode>,
  	
	  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

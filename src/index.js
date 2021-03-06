import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App'

const mainReducer = require('./reducers').mainReducer;
//import 'index.css';
const store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux' ;
import createLogger from 'redux-logger';
// import { connect } from 'react-redux';
import thunk from 'redux-thunk'
import Reducer  from "./Reducer";
import * as serviceWorker from './serviceWorker';


//const logger = createLogger(); //中间件
let Store=createStore(Reducer,applyMiddleware(thunk));
//let Store=createStore(Reducer);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

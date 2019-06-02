import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// authorization
import setAuthorizationToken from './utils/setAuthorizationToken';

// creating store
import { createStore, applyMiddleware } from 'redux';

//  middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

import rootReducer from './reducers/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { setCurrentUser } from './actions/login';
import jwt from 'jsonwebtoken';

const store = createStore(
    rootReducer,
    // applyMiddleware(thunk)
    composeWithDevTools(
        applyMiddleware(reduxPromise, thunk, logger)
    )
);

if (localStorage.token){
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));

}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider> 
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

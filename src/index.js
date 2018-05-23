import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const snackReducer = (state = [], action) => {
    if (action.type === 'SNACK_INPUT') {
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    //   Combine Reducers and do some extra validation //
    combineReducers({
        snackReducer
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

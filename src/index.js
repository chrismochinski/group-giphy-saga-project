import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {createStore, combineReducers, applyMiddleware} from 'redux';


function* rootSaga() {

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// unite reducers and create redux store
// lasagna is an inside joke
const lasagna = createStore(
    combineReducers({}),
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={lasagna}><App/></Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';



function* rootSaga() {
    yield takeEvery('FETCH_SEARCH', fetchSearch) //  1. receive from client side
    yield takeEvery('FETCH_FAVORITES', fetchFavorites) // returns a list of favorites
    yield takeEvery('ADD_FAVORITE', newFavorite)
    yield takeEvery('CHANGE_FAVORITE', changeFavorite) 
}


// 2. receive search from rootSaga above
function* fetchSearch (newSearch) {
    try {
        console.log('in index.js, newSearch =', newSearch.payload);
        const giphyResponse = yield axios.get(`/linking/${newSearch.payload}`)
        console.log('giphyresponse is:', giphyResponse.data.data)
        yield put({ type: 'SET_LIST', payload: giphyResponse.data.data})
    } catch (uhoh) {
        console.log('uhoh:', uhoh);
    }
} 

function* fetchFavorites() {
    try{
        const favoriteResponse = yield axios.get('/api/favorite'); 
        yield put({type: 'SET_LIST', payload: favoriteResponse.data});
    }
    catch (error) {
        console.log('wah wah wawawaaaaaaaaaaaaaah', error);
    }
}

function* changeFavorite(action) {
    //rough outline, likely needs tweaking
    try {
        yield axios.put(`/api/favorite/${action.payload.id}`, action.payload.newCategory)
        yield put({type: 'FETCH_FAVORITES'});
    }
    catch(error) {
        console.log('error', error);
    }
}

function* newFavorite(action) {
    try {
        yield axios.post('/api/favorite/', action.payload);
        console.log('added new favorite');
        yield put({type: 'FETCH_FAVORITE'});
    }
    catch(error) {
        console.log('error is this', error);
    }
}

// 3. receive from above (master reducer):
const gifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload
        default:
            return state;
    }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// unite reducers and create redux store
// lasagna is an inside joke
const lasagna = createStore(
    combineReducers({
        gifReducer, //EXTRA CHEEEEEEZ
    }),
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={lasagna}><App /></Provider>, document.getElementById('root'));

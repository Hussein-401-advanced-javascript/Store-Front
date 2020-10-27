// store index.js =-> combine reducers
// create and export my store 

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk'
// to enable the chrome extension for redux
// import { composeWithDevTools } from 'redux-devtools-extension';
import Categories from './reducers/categories';
import Products from './reducers/products';
import Cart from './reducers/cart';

// when you have more than one reducer combine here everything
let reducers = combineReducers({Categories, Products, Cart});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))
    // return createStore(reducers)
}

export default store();
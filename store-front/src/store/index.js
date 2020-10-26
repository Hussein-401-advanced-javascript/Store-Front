// store index.js =-> combine reducers
// create and export my store 

import {createStore, combineReducers} from 'redux';

// to enable the chrome extension for redux
// import { composeWithDevTools } from 'redux-devtools-extension';
import Categories from './reducers/categories';
import Products from './reducers/products';

// when you have more than one reducer combine here everything
let reducers = combineReducers({Categories, Products});

const store = () => {
    // return createStore(reducers, composeWithDevTools())
    return createStore(reducers)
}

export default store();
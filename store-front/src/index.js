import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import store from './store/';

function Main (){
  return (
      <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  )
}

const rootElement = document.getElementById('root');

ReactDom.render(<Main/> ,  rootElement)
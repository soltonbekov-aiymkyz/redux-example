
import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import counterReducers from '../src/redux/counterReducers';
import colorReduser from '../src/redux/colorReduser';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import textRedusers from './redux/textRedusers';

const rootReduser = combineReducers({
   counter: counterReducers, 
   color: colorReduser,
   text: textRedusers,
  })
const store = createStore(rootReduser)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider, ReactReduxContext } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import App from './App';
// import reportWebVitals from './reportWebVitals'
// const store = createStore();
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import counterReducer from './redux/counterReducer';
import colorReducer from './redux/colorReducer';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
   counter:counterReducer,
    color:colorReducer
   })
const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import {createStore} from "redux"
// import App from './App';
// import counterReducer from './redux/reducer';
// import reportWebVitals from './reportWebVitals';
// const store = createStore(counterReducer);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();


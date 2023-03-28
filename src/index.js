import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import { store } from './store';
import App from './App';
import { Provider } from 'react-redux';
import {PublicClientApplication} from '@azure/msal-browser';

 const config = new PublicClientApplication ({
  auth:{
  appId: 'd9747514-5847-4e3d-bdfa-f43f0164b457',
  redirectUrl:'/',
  authority: 'https://login.microsoftonline.com/777591d9-0767-4e49-8c1d-c500c81bc25e/'
  }
});


// const container = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <App tab='home' msalInstance ={config} />
</Provider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// last version msalInstance ={config}
// <React.StrictMode>
  //   <App />
  // </React.StrictMode

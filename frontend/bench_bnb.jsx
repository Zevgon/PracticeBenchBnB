import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signUp } from './util/session_api_util';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
  window.signUp = signUp;
  window.store = configureStore();
});

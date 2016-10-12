import React from 'react';
import ReactDOM from 'react-dom';
import { signUp } from './util/session_api_util';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.signUp = signUp;
  window.store = configureStore();
});

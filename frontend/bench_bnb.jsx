import React from 'react';
import ReactDOM from 'react-dom';
import {signUp} from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnG</h1>, root);
    window.signUp = signUp;
});

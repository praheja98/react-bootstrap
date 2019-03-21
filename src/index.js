import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import ModalGroupLayer from './ModalGroupLayer.js';
import ModalGroup from './ModalGroup.js';
import Testing from './Testing.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Testing/>,document.getElementById('another-testing'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

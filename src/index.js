import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Root from './app/Root';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
    <Provider store={store}><Root /></Provider>
, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import App from './components/app/app';
import AppStore from './stores/app-store';
import './index.scss';

const store = new AppStore();
store.rows = Array.from(Array(3000)).fill('');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(`app`)
);

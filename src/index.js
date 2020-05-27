import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import App from './components/app/app';
import AppStore from './stores/app-store';
import './index.scss';

const thousandsRows = {};
Array.from(Array(3000)).forEach((item, index) => thousandsRows[index] = index);

const store = new AppStore(thousandsRows);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(`app`)
);

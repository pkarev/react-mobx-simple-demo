import React from 'react';
import {observer, inject} from 'mobx-react';
import Table from '../table/table';
import './app.scss';

const App = inject(['store'])(observer(({store: {addRow}}) => {
    return (
        <div className='app'>
            <div className='container'>
                <h1 className='app__title'>MobX demo</h1>
                <button type='button' onClick={addRow}>Добавить строку</button>
                <Table/>
            </div>
        </div>
    );
}));

export default App;

import React from 'react';
import './app.scss';
import Table from '../table/table';

const rows = [1, 2, 3]

function App() {
    return (
        <div className='app'>
            <div className='container'>
                <h1 className='app__title'>MobX demo</h1>
                <button type='button'>Добавить строку</button>
                <Table rows={rows}/>
            </div>
        </div>
    );
}

export default App;

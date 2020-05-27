import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Row from '../row/row';

const Table = inject(['store'])(observer(({store: {rows}}) => (
    <table>
        <tbody>
        {
            Object.keys(rows).map((id) => (
                <Row key={id} id={id}/>
            ))
        }
        </tbody>
    </table>
)));

Table.propTypes = {
    rows: PropTypes.array,
};

export default Table;

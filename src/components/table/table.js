import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import Row from '../row/row';

const Table = inject(['store'])(observer(({store: {rows, deleteRow, updateRow}}) => (
    <table>
        <tbody>
        {
            rows.map((row, index) => (
                <Row
                    row={row}
                    key={index}
                    onRemove={() => {deleteRow(index)}}
                    onChange={(value) => {updateRow(value, index)}}
                />
            ))
        }
        </tbody>
    </table>
)));

Table.propTypes = {
    rows: PropTypes.array,
};

export default Table;

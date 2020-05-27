import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

const Row = inject(['store'])(observer(({store: {rows, deleteRow, updateRow}, id}) => (
    <tr>
        <td>
            <input type='text' value={rows[id]} onChange={(evt) => {updateRow(id, evt.target.value)}}/>
        </td>
        <td>
            <button type='button' onClick={() => deleteRow(id)}>Удалить</button>
        </td>
    </tr>
)));

Row.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Row;

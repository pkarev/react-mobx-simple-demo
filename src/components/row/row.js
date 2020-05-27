import React from 'react';
import PropTypes from 'prop-types';

const Row = ({row}) => (
    <tr>
        <td>
            <input type='text'/>
        </td>
        <td>
            <button type='button'>Удалить</button>
        </td>
    </tr>
);

Row.propTypes = {
    row: PropTypes.number
};

export default Row;

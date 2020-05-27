import React from 'react';
import PropTypes from 'prop-types';

const Row = ({row, onRemove, onChange}) => {
    return (
        <tr>
            <td>
                <input type='text' value={row} onChange={(evt) => {onChange(evt.target.value)}}/>
            </td>
            <td>
                <button type='button' onClick={onRemove}>Удалить</button>
            </td>
        </tr>
    );
};

Row.propTypes = {
    row: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default React.memo(Row);

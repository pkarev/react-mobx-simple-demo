import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row/row';

const Table = ({rows}) => (
    <table>
        <tbody>
        {
            rows.map((row) => (
                <Row key={row}/>
            ))
        }
        </tbody>
    </table>
);

Table.propTypes = {
    rows: PropTypes.array,
};

export default Table;

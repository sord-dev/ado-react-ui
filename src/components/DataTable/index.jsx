import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { LoadingSpinner, RenderHeaderCell, RenderRow } from './partials';

const Table = ({ columns, data, handleClickRow, setSelected }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const toggleRowSelection = (rowIndex) => {
        const isSelected = selectedRows.includes(rowIndex);
        const newSelectedRows = isSelected
            ? selectedRows.filter((row) => row !== rowIndex)
            : [...selectedRows, rowIndex];

        setSelectedRows(newSelectedRows);

        const selected = newSelectedRows.map((row) => data[row]);
        setSelected(selected); // Pass selected rows to parent component
    };

    const handleSelectAll = (e) => {
        e.stopPropagation();
        if (e.target.checked) {
            const selected = data.map((_, index) => index);
            setSelectedRows(selected);
            setSelected(data)
        } else {
            setSelectedRows([]);
            setSelected([])
        }
    };

    const handleRowClick = (e, rowIndex) => {
        e.stopPropagation();
        if (e.target.type === 'checkbox') return;
        handleClickRow(rowIndex); // Pass selected rows to parent component
    };

    const isRowSelected = (rowIndex) => selectedRows.includes(rowIndex);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.headerCell}>
                            <input
                                className={styles.headerCell}
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedRows.length === data.length}
                            />
                        </th>
                        {columns.map((column, index) => (
                            <RenderHeaderCell key={index} column={column} colIndex={index} />
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length <= 0 ? <LoadingSpinner /> : data.map((row, rowIndex) => (
                        <RenderRow {...{ columns, handleRowClick, isRowSelected, row, rowIndex, toggleRowSelection }} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            field: PropTypes.string.isRequired,
            render: PropTypes.func
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClickRow: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired
};

export default Table;

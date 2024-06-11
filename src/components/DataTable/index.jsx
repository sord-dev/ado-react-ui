import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Table = ({ columns, data, handleClickRow, setSelected }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const toggleRowSelection = (rowIndex) => {
        const isSelected = selectedRows.includes(rowIndex);
        const newSelectedRows = isSelected
            ? selectedRows.filter((row) => row !== rowIndex)
            : [...selectedRows, rowIndex];

        setSelectedRows(newSelectedRows);
        setSelected(newSelectedRows); // Pass selected rows to parent component
    };

    const handleSelectAll = () => {
        const allRows = data.map((_, index) => index);
        setSelectedRows(selectedRows.length === data.length ? [] : allRows);
        setSelected(selectedRows.length === data.length ? [] : allRows);
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
                            <th key={index} className={styles.headerCell}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            onClick={(e) => handleRowClick(e, rowIndex)}
                            className={`${styles.row} ${isRowSelected(rowIndex) && styles.selected}`}
                        >
                            <td onClick={() => toggleRowSelection(rowIndex)} className={styles['checkbox-container']}>
                                <input
                                    className={styles['checkbox']}
                                    type="checkbox"
                                    onChange={(e) => handleRowClick(e, rowIndex)}
                                    checked={isRowSelected(rowIndex)}
                                />
                            </td>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className={styles.cell}>
                                    {column.render
                                        ? column.render(row[column.field])
                                        : Array.isArray(row[column.field])
                                        ? row[column.field].join(', ')
                                        : row[column.field]}
                                </td>
                            ))}
                        </tr>
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

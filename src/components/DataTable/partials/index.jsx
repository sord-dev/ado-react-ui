import styles from '../styles.module.css';

export const RenderCell = ({ row, column, colIndex }) => (
    <td key={colIndex} className={styles.cell}>
        {column.render ? column.render(row[column.field]) : row[column.field]}
    </td>
);

export const RenderRow = ({
    row,
    rowIndex,
    columns,
    handleRowClick,
    toggleRowSelection,
    isRowSelected,
}) => (
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
        {columns.map((column, colIndex) =>
            RenderCell({ row, column, colIndex })
        )}
    </tr>
);

export const RenderHeaderCell = ({ column, colIndex }) => (
    <th key={colIndex} className={styles.headerCell}>
        {column.label}
    </th>
);

export const LoadingSpinner = () => (
    <div className={styles['loading-spinner']}>
        <h2>Loading...</h2>
        <div className={styles['spinner']} />
    </div>
);
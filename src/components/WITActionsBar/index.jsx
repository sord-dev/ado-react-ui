import React, { useEffect } from 'react';
import styles from './styles.module.css';

const WITActionsBar = ({ actions = [], onBatchAction = (action) => console.log(`${action?.label} chosen!`), onCreateWorkItem, selectedRows }) => {

    const [selected, setSelectedRows] = React.useState([])
    
    useEffect(() => {
        setSelectedRows(selectedRows)
    }, [selectedRows]);

    const handleBatchActionClick = (action) => {
        onBatchAction(action);
    };

    return (
        <div className={styles['batch-actions']}>
            {selected.length > 0 && <BatchActionDropdown actions={actions} handleBatchActionClick={handleBatchActionClick} />}

            <button
                className={styles['batch-action-button']}
                onClick={onCreateWorkItem}
            >
                Create Work Item
            </button>
        </div>
    );
};

const BatchActionDropdown = ({ actions, handleBatchActionClick }) => {

    return (
        <div className={styles.dropdown}>
            <button className={styles['batch-action-button']}>
                Batch Actions
            </button>
            <div className={styles['dropdown-content']}>
                {actions.map((action, index) => (
                    <a key={index} onClick={() => handleBatchActionClick(action)}>{action.label}</a>
                ))}
            </div>
        </div>
    )
}

export default WITActionsBar;

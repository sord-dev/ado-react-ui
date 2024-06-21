import React, { useEffect } from 'react';
import styles from './styles.module.css';

import { DataTable, Modal, WITActionsBar, TaskItem } from '../../components';

import { columns } from './config';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/appContext';
import { adoAPI } from '../../utils';
import { useAuthContext } from '../../contexts/authContext';
import useSEO from '../../hooks/useSEO';


const WorkItems = () => {
    const navigate = useNavigate();
    const { appState, handleUpdateWorkItems } = useAppContext();
    const { user } = useAuthContext();

    const [selectedRows, setSelectedRows] = React.useState([])

    const [newTaskItemState, setNewTaskItemState] = React.useState({ data: {}, isOpen: false })

    const handleNewTaskItem = () => {
        setNewTaskItemState({ data: {}, isOpen: true })
    }

    const workItemsData = appState.workItems.map((workItem) => {
        const item = workItem.fields
        item['id'] = workItem.id;
        item['title'] = workItem.fields['System.Title'];
        item['state'] = workItem.fields['System.State'];
        item['priority'] = workItem.fields['Microsoft.VSTS.Common.Priority'];
        item['assignedto'] = workItem.fields['System.AssignedTo'].displayName;
        item['created'] = new Date(workItem.fields['System.CreatedDate']).toLocaleString();
        item['lastupdated'] = new Date(workItem.fields['System.ChangedDate']).toLocaleString();
        item['comments'] = workItem.fields['System.CommentCount'];
        item['type'] = workItem.fields['System.WorkItemType'];

        return item;
    });


    const handleClickRow = (row) => {
        const selected = appState.workItems[row]
        navigate('/work-items/' + selected.id)
    }

    const handleSelectedRowChange = (rows) => {
        setSelectedRows(rows)
    }

    const onBatchAction = (action) => {
        const ids = selectedRows.map(row => row.id)
        if (ids.length > 5) {
            // prompt user to confirm
            console.log(`confirm set work items ${ids.join(', ')} as ${action.label}`)
            console.log(`set work items ${ids.join(', ')} as ${action.label}`)
            return
        }

        console.log(`set work items ${ids.join(', ')} as ${action.label}`)
    }

    useSEO({
        title: `Work Items - ${appState.meta.title}`,
        metadata: { description: 'A simple workbench for Azure DevOps' }
    });

    useEffect(() => {
        const updateTasks = async () => {
            try {
                const response = await adoAPI.getTasks(user.token.value);
                handleUpdateWorkItems(response.data.value);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    console.error('Unauthorized:', error);
                    return;
                }
                console.error('Failed to fetch:', error);
            }
        }

        updateTasks()
    }, [' '])

    return (
        <div className={styles.container}>
            <header>
                <h2>Your Work Items</h2>
                <WITActionsBar actions={[{ label: 'Closed' }, { label: 'Active' }, { label: 'New' }]} {...{ onBatchAction, selectedRows, onCreateWorkItem: handleNewTaskItem }} />
            </header>
            <DataTable {...{ data: workItemsData, columns, handleClickRow, setSelected: handleSelectedRowChange }} />

            <Modal isOpen={newTaskItemState.isOpen} onClose={() => setNewTaskItemState({ data: {}, isOpen: false })}>
                <TaskItem />
            </Modal>
        </div>
    );
};

export default WorkItems;
import React from 'react';
import { DataTable } from '../../components';

import { columns } from './config';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/appContext';

const WorkItems = () => {
    const navigate = useNavigate();
    const { appState, handleSelectedWorkItem } = useAppContext();

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
        // Do something with the row data
        console.log('Clicked Rows: ', appState.workItems[row])
        handleSelectedWorkItem(appState.workItems[row])
        navigate('/work-items/' + appState.workItems[row].id)
    }

    const handleSelectedRows = (row) => {
        // Do something with the row data
        console.log('Selected Rows: ', row)
    }

    return (
        <div>
            <DataTable {...{ data: workItemsData, columns, handleClickRow, setSelected: handleSelectedRows }} />
        </div>
    );
};

export default WorkItems;
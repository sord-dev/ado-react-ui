import React, { useEffect } from 'react';
import { DataTable } from '../../components';

import { columns } from './config';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/appContext';
import { adoAPI } from '../../utils';
import { useAuthContext } from '../../contexts/authContext';
import useSEO from '../../hooks/useSEO';

const WorkItems = () => {
    const navigate = useNavigate();
    const { appState, handleSelectedWorkItem } = useAppContext();
    const { user } = useAuthContext();


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

        handleSelectedWorkItem(selected.id)
        navigate('/work-items/' + selected.id)
    }

    const handleSelectedRowChange = (rows) => {
        console.log('Selected Rows: ', rows)
    }

    useSEO({
        title: 'Work Items - ADO Workbench',
        metadata: { description: 'A simple workbench for Azure DevOps' }
    });

    useEffect(() => {
        adoAPI.getTasks(user.token.value).then((data) => {
            console.log('Tasks:', data)
        })
    }, [' '])

    return (
        <div>
            <DataTable {...{ data: workItemsData, columns, handleClickRow, setSelected: handleSelectedRowChange }} />
        </div>
    );
};

export default WorkItems;
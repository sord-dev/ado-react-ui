import React from 'react';
import { DataTable } from '../../components';

import { data, columns } from './config';
import { useNavigate } from 'react-router-dom';

const WorkItems = () => {
    const navigate = useNavigate();

    const handleClickRow = (row) => {
        // Do something with the row data
        console.log('Clicked Rows: ', row)
        navigate('/work-items/' + data[row].id)
    }

    const handleSelectedRows = (row) => {
        // Do something with the row data
        console.log('Selected Rows: ', row)
    }

    return (
        <div>
            <DataTable {...{ data, columns, handleClickRow, setSelected: handleSelectedRows }} />
        </div>
    );
};

export default WorkItems;
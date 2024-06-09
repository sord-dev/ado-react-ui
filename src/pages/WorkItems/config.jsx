import { Link } from "react-router-dom";

export const columns = [
    { label: 'ID', field: 'id', editable: false },
    { label: 'Title', field: 'title', editable: false },
    { label: 'Assigned To', field: 'assignedto', editable: false },
    { label: 'State', field: 'state', editable: true },
    { label: 'Priority', field: 'priority', editable: true },
    { label: 'Created', field: 'created', editable: false },
    { label: 'Last Updated', field: 'lastupdated', editable: false },
    { label: 'Comments', field: 'comments', editable: false }
];

export const data = [
    {
        id: '1',
        title: 'Task 1',
        assignedto: 'John Doe',
        state: 'Active',
        priority: 'High',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 2
    },
    {
        id: '2',
        title: 'What happens when i have a really long title for a task item?',
        assignedto: 'Jane Doe',
        state: 'Resolved',
        priority: 'Medium',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 1
    },
    {
        id: '3',
        title: 'What happens when i have a REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALY long title for a task item?',
        assignedto: 'John Doe',
        state: 'Closed',
        priority: 'Low',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 0
    },
    {
        id: '4',
        title: 'Task 4',
        assignedto: 'Jane Doe',
        state: 'Active',
        priority: 'High',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 3
    },
    {
        id: '5',
        title: 'Task 5',
        assignedto: 'John Doe',
        state: 'Resolved',
        priority: 'Medium',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 1
    },
    {
        id: '6',
        title: 'Task 6',
        assignedto: 'Jane Doe',
        state: 'Closed',
        priority: 'Low',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 0
    },
    {
        id: '7',
        title: 'Task 7',
        assignedto: 'John Doe',
        state: 'Active',
        priority: 'High',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 2
    },
    {
        id: '8',
        title: 'Task 8',
        assignedto: 'Jane Doe',
        state: 'Resolved',
        priority: 'Medium',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 1
    },
    {
        id: '9',
        title: 'Task 9',
        assignedto: 'John Doe',
        state: 'Closed',
        priority: 'Low',
        created: '01/01/2021',
        lastupdated: '01/02/2021',
        comments: 0
    }
];
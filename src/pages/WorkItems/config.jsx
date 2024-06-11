import { Avatar } from '../../components';
import { uuidToHexColor } from '../../utils';

const renderOrgs = (orgs) => {
    return (
        <div style={{ display: 'flex', gap: '-2px' }}>
            {orgs.map(({name, id}, index) => {
                const backgroundColor = uuidToHexColor(id);
                return <Avatar key={index} {...{name, backgroundColor, textColor: 'white' }} scale='.8' />;
            })}
        </div>)
};

export const columns = [
    { label: 'ID', field: 'id', editable: false },
    { label: 'Title', field: 'title', editable: false },
    { label: 'Assigned To', field: 'assignedto', editable: false },
    { label: 'State', field: 'state', editable: true },
    { label: 'Orginisations', field: 'orgs', render: renderOrgs },
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
        orgs: [{ name: 'Org 1', id: '111efec2-7290-468c-bdeb-a55dee53980a' }],
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
        orgs: [{ name: 'Org 1', id: '111efec2-7290-468c-bdeb-a55dee53980a' }],
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
        orgs: [{ name: 'Org 1', id: '111efec2-7290-468c-bdeb-a55dee53980a' }, { name: 'Org 2', id: '222tceq5-7290-468c-bdeb-a55dee53980a' }],
        comments: 0
    },
];
import { Avatar } from '../../components';
import { returnWorkItemIcon, uuidToHexColor } from '../../utils';

const renderOrgs = (orgs) => {
    if(!orgs) return null;
    return (
        <div style={{ display: 'flex', gap: '-2px' }}>
            {orgs.map(({name, id}, index) => {
                const backgroundColor = uuidToHexColor(id);
                return <Avatar key={index} {...{name, backgroundColor, textColor: 'white' }} scale='.8' />;
            })}
        </div>)
};

const renderWorkItemType = (type) => {
    if(!type) return null;
    return <img style={{ width: '16px', height: '16px'}} src={returnWorkItemIcon(type)} alt={`${type} icon`} />
}

export const columns = [
    { label: 'ID', field: 'System.Id', editable: false },
    { label: 'Type', field: 'type', editable: false, render: renderWorkItemType},
    { label: 'Title', field: 'System.Title', editable: false },
    { label: 'Assigned To', field: 'System.', editable: false },
    { label: 'State', field: 'state', editable: true },
    { label: 'Orginisations', field: 'orgs', render: renderOrgs },
    { label: 'Priority', field: 'priority', editable: true },
    { label: 'Created', field: 'created', editable: false },
    { label: 'Last Updated', field: 'lastupdated', editable: false },
    { label: 'Comments', field: 'comments', editable: false }
];

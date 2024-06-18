import { render } from 'react-dom';
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

const renderTitle = (title) => {
    if(!title) return null;
    const maxLength = 65;
        
    if(title.length > maxLength) return <p title={title}>{title.substring(0, maxLength)}...</p>
    return <p>{title}</p>
}

export const columns = [
    { label: 'ID', field: 'System.Id' },
    { label: 'Type', field: 'type', render: renderWorkItemType},
    { label: 'Title', field: 'System.Title', render: renderTitle},
    { label: 'Assigned To', field: 'System.' },
    { label: 'State', field: 'state' },
    { label: 'Orginisations', field: 'orgs', render: renderOrgs },
    { label: 'Priority', field: 'priority' },
    { label: 'Created', field: 'created' },
    { label: 'Last Updated', field: 'lastupdated' },
    { label: 'Comments', field: 'comments' }
];

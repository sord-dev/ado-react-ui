import taskItem from '/task-item.svg'

export const processTaskData = (task) => {
    return {
        title: task.fields['System.Title'],
        type: task.fields['System.WorkItemType'],
        icon: returnItemIcon(task.fields['System.WorkItemType']),
        description: task.fields['System.Description'],
        assignedTo: {
            displayName: task.fields['System.AssignedTo'].displayName,
            imageUrl: task.fields['System.AssignedTo'].imageUrl
        },
        state: task.fields['System.State'],
        reason: task.fields['System.Reason'],
        priority: task.fields['Microsoft.VSTS.Common.Priority'],
        createdDate: new Date(task.fields['System.CreatedDate']).toLocaleString(),
        changedDate: new Date(task.fields['System.ChangedDate']).toLocaleString(),
        commentCount: task.fields['System.CommentCount'],
        activatedDate: new Date(task.fields['Microsoft.VSTS.Common.ActivatedDate']).toLocaleString(),
        activatedBy: task.fields['Microsoft.VSTS.Common.ActivatedBy'].displayName,
        attachments: task.relations.filter(relation => relation.rel === 'AttachedFile').map(relation => ({
            id: relation.attributes.id,
            name: relation.attributes.name,
            url: relation.url
        })),
        taskUrl: task._links.html.href
    };
}


const returnItemIcon = (type) => {
    switch (type) {
        case 'Task':
            return taskItem;
        default:
            return taskItem;
    }
}
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

import defaultData from './default.json';
import { processTaskData } from './utils';
import { QAButton } from '..';
import { AttachmentsList, TicketsList } from './partials';

const WorkItem = ({ task = defaultData, openModal }) => {
    const { id } = useParams();

    const {
        title,
        type,
        icon,
        description,
        assignedTo: { displayName, imageUrl },
        state,
        priority,
        createdDate,
        changedDate,
        commentCount,
        taskUrl,
        attachments
    } = processTaskData(task);

    return (
        <div className={styles['task-item']}>
            <div className={styles['task-type']}>
                <img src={icon} alt={`${type} icon`} />
                <p>{type}</p>
            </div>

            <div className={styles['task-title']}>
                <h2>{id}</h2>
                <h2 className={styles['task-title-name']}>{title}</h2>
            </div>

            <section className={styles['details-bar']}>
                <div className={styles['assigned-to']}>
                    <p>Assigned to:</p>
                    <img src={imageUrl} alt={`${displayName}'s avatar`} />
                    <p>{displayName}</p>
                </div>

                <div className={styles['task-details']}>
                    <p>State: {state}</p>
                    <p>Priority: {priority}</p>
                    <p>Created: {createdDate}</p>
                    <p>Last Updated: {changedDate}</p>
                    <p>Comments: {commentCount}</p>
                    <p>Attachments: {attachments.length}</p>
                </div>

            </section>

            <section className={styles['main-info-sect']}>

                <div className={styles['bay-2']}>
                    <h2>Description</h2>
                    <div className={styles['task-description']} dangerouslySetInnerHTML={{ __html: description }} />

                    <h2>Comments</h2>
                    <div>
                        Comments will be here!!
                    </div>
                </div>

                <div className={styles['bay-1']}>
                    <AttachmentsList attachments={attachments} />
                    <TicketsList />
                </div>

                <div className={styles['bay-1']}>
                    <h2>Quick Actions</h2>
                    <div>
                        <QAButton
                            label='Start Deployment'
                            info={'start a deployment based off of a task item, and have it complete upon a successful run'}
                            action={() => { openModal('ExampleForm', task.id) }}
                        />
                        <QAButton label='Copy Task Item' />
                        <QAButton label='Search Related Items' />
                    </div>
                </div>


            </section>


            <div className={styles['task-links']}>
                <a href={taskUrl} target="_blank" rel="noopener noreferrer">View Task</a>
            </div>
        </div>
    );
};

export default WorkItem;

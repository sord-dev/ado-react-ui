import React from 'react';
import styles from './styles.module.css';

import defaultData from './default.json';
import { processTaskData } from './utils';
import { AttachmentsList, Detail, DetailsGrid, QuickAction, QuickActionGrid, TicketsList } from './partials';
import { CopyTaskItemForm } from '../Forms';

const WorkItem = ({ task = defaultData, openModal }) => {
    if (!task) return null;

    const {
        id,
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

    const handleSubmit = (data) => {
        console.log('Form submitted!', data);
    }

    const witDynamicClassName = type.toLowerCase().split(' ').join('-');

    return (
        <div className={styles['task-item']}>

            <div className={`${styles.banner}`}>
                <div className={styles['task-title-container']}>
                    <div className={`${styles.band} ${styles[witDynamicClassName]}`} />
                    <div className={styles[`task-type`]}>
                        <img src={icon} alt={`${type} icon`} draggable='false' />
                        <p>{type}</p>
                    </div>

                    <div className={styles['task-title']}>
                        <h2>{id}</h2>
                        <a href={taskUrl} target='_blank' rel='noreferrer' ><h2 className={styles['task-title-name']}>{title}</h2></a>
                    </div>
                </div>

                <div className={styles['task-actions']}>
                    <QuickAction label='Copy Task' info={'copy the task item'} action={() => openModal(<CopyTaskItemForm onSubmit={handleSubmit} />)} />
                    <QuickAction label='Create Template' info={'Use task item as a template'} />
                </div>


            </div>

            <section className={styles['details-bar']}>
                <div>
                    <div className={styles['assigned-to']}>
                        <p>Assigned to:</p>
                        <img src={imageUrl} alt={`${displayName}'s avatar`} />
                        <p>{displayName}</p>
                    </div>

                    <DetailsGrid>
                        <Detail label='State' value={state} />
                        <Detail label='Priority' value={priority} />
                        <Detail label='Created' value={createdDate} />
                        <Detail label='Last Updated' value={changedDate} />
                        <Detail label='Comments' value={commentCount} />
                        <Detail label='Attachments' value={attachments?.length || 0} />
                    </DetailsGrid>
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
                    {attachments?.length > 0 && <AttachmentsList attachments={attachments} />}
                    <TicketsList />
                </div>

                <div className={styles['bay-1']}>
                    <h2>Other Task Data</h2>

                </div>
            </section>
        </div>
    );
};

export default WorkItem;

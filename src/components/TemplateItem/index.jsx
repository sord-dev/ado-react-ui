import React from 'react';
import styles from './styles.module.css';
import { returnWorkItemIcon } from '../../utils';

import attachmentIcon from '/link-black.svg'

const TemplateItem = ({ template, handleSelect }) => {
    const { name, description, type, timestamp, createdBy, attachments = 0, _id } = template;
    const icon = returnWorkItemIcon(type)
    const witDynamicClassName = type?.toLowerCase().split(' ').join('-');

    return (
        <div className={styles['template-item']}>
            <div className={`${styles.band} ${styles[witDynamicClassName]}`} />
            <div className={styles['template-item-header']}>
                <div>
                    <div className={styles['template-item-title']}>
                        <img src={icon} alt={`${type} Icon`} draggable='false' />
                        <h3>{name}</h3>
                    </div>
                    <p>{description}</p>
                </div>
                <div className={styles['template-item-meta']}>
                    <img src={attachmentIcon} alt={'attachments icon'} draggable='false' />
                    <p>{attachments}</p>
                </div>


            </div>

            <div className={styles['template-item-footer']}>
                <div className={styles['template-item-actions']}>
                    <button>Create Item</button>
                    <button onClick={() => handleSelect(_id)} >Edit</button>
                </div>

                <div>
                    <p>Created by: {createdBy}</p>
                    <p>Last updated: {new Date(timestamp).toLocaleDateString()}</p>
                </div>
            </div>


        </div>
    );
};

export default TemplateItem;

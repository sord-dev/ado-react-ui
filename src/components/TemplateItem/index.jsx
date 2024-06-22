import React from 'react';
import styles from './styles.module.css';
import { returnWorkItemIcon } from '../../utils';

import attachmentIcon from '/link-black.svg'

const TemplateItem = ({ template }) => {
    const { name, description, type, createdBy, lastUpdated, attachments } = template;
    const icon = returnWorkItemIcon(type)
    const witDynamicClassName = type.toLowerCase().split(' ').join('-');

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
                    <button>Edit</button>
                </div>

                <div>
                    <p>Created by: {createdBy}</p>
                    <p>Last updated: {new Date(lastUpdated).toLocaleDateString()}</p>
                </div>
            </div>


        </div>
    );
};

export default TemplateItem;

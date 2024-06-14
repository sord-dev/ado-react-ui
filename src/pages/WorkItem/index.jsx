import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { Breadcrum, Modal, TaskItem } from '../../components';

const WorkItem = () => {
    const [modalState, updateModalState] = useState({ open: false, form: ''});
    const { id } = useParams();

    const handleOpenModal = (form) => {
        updateModalState({ open: true, form: form });
    }

    const handleCloseModal = () => updateModalState({ open: false, form: ''})

    return (
        <div className={styles['work-item-container']}>
            <Breadcrum breadcrumbs={[{ label: 'Work Items', link: '/work-items' }, { label: id }]} />
            <TaskItem openModal={handleOpenModal} />
            <Modal isOpen={modalState.open} children={modalState.form} onClose={handleCloseModal} />
        </div>
    );
};

export default WorkItem;
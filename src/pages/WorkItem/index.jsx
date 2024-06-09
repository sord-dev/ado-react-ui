import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { Breadcrum, Forms, Modal, TaskItem } from '../../components';

const WorkItem = () => {
    const [modalState, updateModalState] = useState({ open: false, form: ''});
    const { id } = useParams();

    const handleOpenModal = (form, workItemID) => {
        if(!Forms[form]) return console.error('Form not found');
        updateModalState({ open: true, form: Forms[form]});
    }

    const handleCloseModal = () => updateModalState({ open: false, form: ''})

    return (
        <div className={styles['work-item-container']}>
            <Breadcrum breadcrumbs={[{ label: 'Work Items', link: '/work-items' }, { label: id }]} />
            <TaskItem openModal={handleOpenModal} />
            <Modal isOpen={modalState.open} children={<modalState.form />} onClose={handleCloseModal} />
        </div>
    );
};

export default WorkItem;
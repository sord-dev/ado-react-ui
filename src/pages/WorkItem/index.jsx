import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { Breadcrum, Modal, TaskItem } from '../../components';
import { useAppContext } from '../../contexts/appContext';
import { adoAPI } from '../../utils';
import { useAuthContext } from '../../contexts/authContext';

const WorkItem = () => {
    const [modalState, updateModalState] = useState({ open: false, form: ''});
    const { id } = useParams();
    const {appState} = useAppContext();
    const {user} = useAuthContext();

    const [workItem, setWorkItem] = useState(appState.workItems.find(workItem => workItem.id == id));

    const handleOpenModal = (form) => updateModalState({ open: true, form });
    const handleCloseModal = () => updateModalState({ open: false, form: ''})

    useEffect(() => {
        adoAPI.getTaskById(id,user.token.value).then((response) => {
            setWorkItem(response.data);
        })
    }, [' '])

    return (
        <div className={styles['work-item-container']}>
            <Breadcrum breadcrumbs={[{ label: 'Work Items', link: '/work-items' }, { label: id }]} />
            <TaskItem openModal={handleOpenModal}  task={workItem} />
            <Modal isOpen={modalState.open} children={modalState.form} onClose={handleCloseModal} />
        </div>
    );
};

export default WorkItem;
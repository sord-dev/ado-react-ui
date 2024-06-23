import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useSEO from '../../hooks/useSEO';
import { Modal, TemplateDetails, TemplateItem } from '../../components';
import { adoAPI } from '../../utils';

import { useAppContext } from '../../contexts/appContext';
import { useAuthContext } from '../../contexts/authContext';

const Templates = () => {
    const { user } = useAuthContext();
    const { appState, handleUpdateTemplates } = useAppContext();

    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleOpenTemplateDetails = (template) => {
        console.log('Selected Template:', template);
        setSelectedTemplate(template);
    }

    const closeModal = () => {
        setSelectedTemplate(null);
    }

    useSEO({
        title: `Templates - ${appState.meta.title}`,
    });

    useEffect(() => {
        const updateTemplates = async () => {
            try {
                const response = await adoAPI.getTemplates(user.token.value);
                console.log('Templates:', response.data);
                handleUpdateTemplates(response.data);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    console.error('Unauthorized:', error);
                    return;
                }
                console.error('Failed to fetch:', error);
            }
        }

        updateTemplates()
    }, [' '])

    return (
        <div className={styles.container}>
            <h1>Templates</h1>
            <input type="text" className={styles["templates-searchbar"]} placeholder='Search Templates' />

            <div className={styles.templates}>
                {appState.templates?.map((template) => <TemplateItem key={template._id} template={template} handleSelect={handleOpenTemplateDetails} />)}
            </div>

            <Modal isOpen={selectedTemplate !== null} onClose={closeModal}>
                 <TemplateDetails templateId={selectedTemplate} />
            </Modal>
        </div>
    );
};

export default Templates;
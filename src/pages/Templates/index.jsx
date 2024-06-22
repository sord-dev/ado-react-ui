import React from 'react';
import styles from './styles.module.css';
import useSEO from '../../hooks/useSEO';
import { useAppContext } from '../../contexts/appContext';
import { TemplateItem } from '../../components';

const Templates = () => {
    const { appState } = useAppContext();

    useSEO({
        title: `Templates - ${appState.meta.title}`,
    });

    return (
        <div className={styles.container}>
            <h1>Templates</h1>
            <input type="text" />

            <div className={styles.templates}>
                {appState.templates.map((template) => (
                    <TemplateItem key={template._id} template={template} />
                ))
                }
            </div>
        </div>
    );
};

export default Templates;
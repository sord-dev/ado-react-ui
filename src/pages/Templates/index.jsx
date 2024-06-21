import React from 'react';
import styles from './styles.module.css';
import useSEO from '../../hooks/useSEO';
import { useAppContext } from '../../contexts/appContext';

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
                    <div key={template.id} className={styles.template}>
                        <h2>{template.name}</h2>
                        <p>{template.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Templates;
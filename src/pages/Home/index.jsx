import React from 'react';
import styles from './styles.module.css';
import useSEO from '../../hooks/useSEO';
import { useAppContext } from '../../contexts/appContext';

const Home = () => {
    const { appState } = useAppContext();

    useSEO({
        title: `0 Alerts | ${appState.workItems?.length} Work Items | 0 Workflows | ADO Workbench`,
        metadata: { description: 'A simple workbench for Azure DevOps' }
    });

    return (
        <div className='container'>
            <section className={styles['overview']}>
                <div className={styles['info-pane']}>
                    <h3>Successful Workflow Runs</h3>
                    <h1>0</h1>
                </div>
                
                <div className={styles['info-pane']}>
                    <h3>Successful Workflow Runs</h3>
                    <h1>0</h1>
                </div>

                <div className={styles['info-pane']}>
                    <h3>Failed Workflow Runs</h3>
                    <h1>0</h1>
                </div>

                <div className={styles['info-pane']}>
                    <h3>Completed Work Items</h3>
                    <h1>528</h1>
                </div>

            </section>
        </div>
    );
};

export default Home;
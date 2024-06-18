import React from 'react';
import styles from './styles.module.css';
import workbenchIcon from '/workbench-icon.svg';

import useSEO from '../../hooks/useSEO';

const NotFound = () => {


    useSEO({ title: 'Page not found!' });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>404</h1>
                <img className={styles.logo} src={workbenchIcon} />
                <p>Page not found!</p>
            </div>
        </div>
    );
};

export default NotFound;
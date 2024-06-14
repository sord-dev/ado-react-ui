import React, { Children } from 'react';
import styles from './styles.module.css';

const QuickActionGrid = ({ children }) => {
  return (
    <div className={styles["quick-action-grid"]}>
        {children}
    </div>
  );
};

export default QuickActionGrid;

import React from 'react';
import styles from './styles.module.css';

const MSSignInButton = ({ onClick }) => {
    
    return (
        <button className={styles.button} onClick={() => onClick()}>
            <img src="https://learn.microsoft.com/favicon.ico" alt="microsoft icon" /> <p>Sign in using microsoft</p>
        </button>
    );
};

export default MSSignInButton;
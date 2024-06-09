import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]} >
                <button className={styles["close-button"]} onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
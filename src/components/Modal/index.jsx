import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles["modal"]} onClick={() => onClose()}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <button className={styles["close-button"]} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
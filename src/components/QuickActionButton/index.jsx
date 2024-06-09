import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Button = ({ action, label, error, info }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}>
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => action()}>
                    {label}
                </button>

                {info && (<>
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={styles['info-icon']}>
                        <p>?</p>
                    </div>

                    {isHovered && <div className={styles.info}>{info}</div>}
                </>)}
            </div>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string // Optional error message
};

export default Button;

import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { convertNameToInitials } from './utils';

const useOutsideClick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [callback]);

    return ref;
};

const Avatar = ({ name, email, backgroundColor, popout = false, scale = '1', textColor }) => {
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const initials = convertNameToInitials(name);

    const handleCloseDropdown = () => {
        setIsProfileClicked(false);
    };

    const avatarRef = useOutsideClick(handleCloseDropdown);

    const handleProfileClick = (e) => {
        e.stopPropagation();
        setIsProfileClicked((prev) => !prev);
    };

    return (
        <div className={styles['avatar-container']} ref={avatarRef}>
            <div onClick={handleProfileClick} className={styles.avatar}>
                <div className={styles[`avatar-icon`]} style={{ backgroundColor, scale }}>
                    <span style={{color: textColor}}>{initials}</span>
                </div>
            </div>

           {popout && <PopoutMenu name={name} email={email} isProfileClicked={isProfileClicked} backgroundColor={backgroundColor} />}
        </div>
    );
};

const PopoutMenu = ({ name, email, isProfileClicked, backgroundColor }) => {
    const initials = convertNameToInitials(name);
    return (isProfileClicked && (
        <div className={styles['profile-dropdown']}>
            <header className={styles['profile-dropdown-header']}>
                <span>Sign Out</span>
            </header>

            <div className={styles['profile-dropdown-info']}>
                <div>
                    <div className={styles['avatar-icon-x2']} style={{ backgroundColor }}>
                        <span>{initials}</span>
                    </div>
                </div>

                <div className={styles['profile-dropdown-meta']}>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>

        </div>
    )
    )
}

export default Avatar;

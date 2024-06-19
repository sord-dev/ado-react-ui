import React from 'react';
import styles from './styles.module.css';
import Avatar from '../Avatar';
import { useAuthContext } from '../../contexts/authContext';

import wbIcon from '/workbench-icon.svg'
import { SideNav } from './partials';
import { useAppContext } from '../../contexts/appContext';

const Navbar = () => {
    const { user, handleLogout } = useAuthContext();
    const { appState, handleUpdateNavState } = useAppContext();

    return (
        <nav className={styles.navbar}>
            <SideNav appState={appState} handleUpdateNavState={handleUpdateNavState} />
            <header className={styles['nav-header']}>
                <div className={styles['nav-logo']}>
                    <img src={wbIcon} alt="ADO Workbench logo" />

                    <div className={styles['title']}>
                        <h1>ADO Workbench</h1>
                        <p>{appState.meta.version}</p>
                    </div>
                </div>

                <div className={styles['search-bar']}>
                    <input type="text" placeholder='Search Task Item ID, Title or Workbench Service' />
                </div>

                <Avatar name={user.name} email={user.email} backgroundColor='#177532' popout onPopoutClose={handleLogout} scale='.8'/>
            </header>
        </nav>
    );

}


export default Navbar;
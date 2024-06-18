import React from 'react';
import styles from './styles.module.css';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';

import wbIcon from '/workbench-icon.svg'

const NavbarDefaultState = {
    version: 'v0.0.1'
}

const Navbar = ({ version, appState }) => {
    const { user, handleLogout } = useAuthContext();

    return (
        <nav className={styles.navbar}>
            <SideNav appState={appState} />
            <header className={styles['nav-header']}>

                <div className={styles['nav-logo']}>
                    <img src={wbIcon} alt="ADO Workbench logo" />

                    <div className={styles['title']}>
                        <h1>ADO Workbench</h1>
                        <p>{version || NavbarDefaultState.version}</p>
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

const SideNav = ({ appState }) => {
    const [open, setOpen] = React.useState(true);

    return (
        <div className={styles["side-nav"]}>
            <section>
                <SideNavItem label="Home" to={'/'} />
                <SideNavItem label="Work Items" hits={appState.workItems?.length} displayHits to={'/work-items'} />
                <SideNavItem label="Templates" to={'/templates'} />
                <SideNavItem label="Deployments" to={'/deployments'} />
                <SideNavItem label="Workflows" to={'/workflows'} />
            </section>

            <section>
                <SideNavItem label="Connections" hits={2} displayHits to={'/connections'} />
                <SideNavItem label="Settings" />
            </section>
        </div>
    );
};

const SideNavItem = ({ label, to, hits = 0, displayHits = false }) => {
    const converted = new Intl.NumberFormat().format(hits);
    return (
        <Link to={to}>
            <div className={styles["side-nav-item"]}>
                <span>{label}</span>
                {displayHits ? <span className={styles["alert"]}>{converted}</span> : null}
            </div>
        </Link>
    );
};

export default Navbar;
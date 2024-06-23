import React from "react";
import styles from '../styles.module.css';
import { Link } from "react-router-dom";

import homeIcon from '/home.svg';
import templatesIcon from '/file-text.svg';
import settingsIcon from '/settings.svg';
import connectionsIcon from '/link.svg';
import workflowsIcon from '/terminal.svg';
import workItemsIcon from '/trello.svg';
import deploymentsIcon from '/rocket.svg';

export const SideNav = ({ appState, handleUpdateNavState }) => {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        if (appState?.navOpen !== undefined) {
            setOpen(appState.navOpen);
        }
    }, [appState]);

    return (
        <div className={`${styles["side-nav"]} ${open == false && styles["minified"]}`} >
            <section>
                <SideNavItem label="Work Items" icon={workItemsIcon} hits={appState.workItems?.length} displayHits to={'/'} open={open} />
                <SideNavItem label="Templates" icon={templatesIcon} to={'/templates'} open={open} />
                <SideNavItem label="Deployments" to={'/deployments'} icon={deploymentsIcon} open={open} />
                <SideNavItem label="Workflows" to={'/workflows'} icon={workflowsIcon} open={open} />
            </section>

            <section>
                <SideNavItem label="Connections" to={'/connections'} icon={connectionsIcon} open={open} />
                <div className={`${styles['side-nav-group']} ${open == false && styles["minified"]}`}>
                    <SideNavItem label="Settings" to={'/settings'} icon={settingsIcon} open={open} />
                    <div className={styles.colapsable} onClick={() => handleUpdateNavState(!open)}>{open ? "<<" : ">>"}</div>
                </div>
            </section>
        </div>
    );
};

export const SideNavItem = ({ label, to, hits = 0, displayHits = false, icon, open = true }) => {
    const converted = new Intl.NumberFormat().format(hits);
    return (
        <Link to={to} className={styles["side-nav-item-container"]} >
            <div className={`${styles["side-nav-item"]} ${!open && styles["minified"]}`}>
                <div className={styles["side-nav-label"]} style={{ justifyContent: open ? 'normal' : 'center' }}>
                    {icon ? <img src={icon} alt={label} draggable='false' /> : null}
                    {open ? <span>{label}</span> : null}
                </div>
                {displayHits && open ? <span className={styles["alert"]}>{converted}</span> : null}
            </div>
        </Link>
    );
};
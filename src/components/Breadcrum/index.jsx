import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const BreadcrumbHeader = ({ breadcrumbs }) => {
    return (
        <div className={styles.breadcrumbHeader}>
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    {breadcrumb.link ? (
                        <Link to={breadcrumb.link} className={styles.breadcrumbLink}>
                            {breadcrumb.label}
                        </Link>
                    ) : (
                        <span className={styles.breadcrumbLabel}>{breadcrumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <span className={styles.separator}>/</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BreadcrumbHeader;

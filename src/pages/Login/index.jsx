import React from 'react';
import styles from './styles.module.css';
import workbenchIcon from '/workbench-icon.svg';
import { MSSignInButton } from '../../components';
import { useAuthContext } from '../../contexts/authContext';

import useSEO from '../../hooks/useSEO';

const Login = () => {
    const { handleLogin } = useAuthContext();
    const tennantID = import.meta.env.VITE_AZURE_TENANT_ID;
    const tennantIDSnippet = tennantID.substring(0, 4) + '...' + tennantID.substring(tennantID.length - 4);

    useSEO({ title: 'ADO Workbench - Login' });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>ADO Workbench</h1>
                <img src={workbenchIcon} alt="ADO Workbench Logo Image" className={styles.logo} draggable='false' />
                <h4>Sign into your account</h4>
                <p>Tennant ID: {tennantIDSnippet}</p>
                <MSSignInButton onClick={handleLogin} />
            </div>
        </div>
    );
};

export default Login;
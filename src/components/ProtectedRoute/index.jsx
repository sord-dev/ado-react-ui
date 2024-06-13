// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext.jsx';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();

    if (user.token.value === '' || user.token.expires < new Date()) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../config';
import { useNavigate } from 'react-router-dom';

// Create a new context with a default value
const AuthContext = createContext(null);

let defaultUser = {
    name: '',
    email: '',
    token: { value: '', expires: '' }
}

// Create a provider component
export const AuthContextProvider = ({ children }) => {
    const cachedUser = localStorage.getItem('user');

    if (cachedUser) {
        const savedUser = JSON.parse(cachedUser);
        if (savedUser.token.expires < new Date()) localStorage.removeItem('user');
        else defaultUser = JSON.parse(cachedUser);
    }

    const [user, setUser] = useState(defaultUser);
    const navigate = useNavigate();

    const { instance } = useMsal();

    const handleLogin = async () => {
        try {
            const response = await instance.loginPopup(loginRequest)

            const user = {
                name: response.account.name,
                email: response.account.username,
                token: { value: response.accessToken, expires: response.expiresOn }
            };

            const cachedUser = JSON.stringify(user);
            localStorage.setItem('user', cachedUser);

            setUser(user)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        try {
            setUser({ name: '', email: '', token: { value: '', expires: '' } });
            localStorage.removeItem('user');
            await instance.logout();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('User:', user);
        if (user.token.expires != '' && user.token.expires < new Date()) {
            handleLogout();
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the new context
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthContextProvider');
    }
    return context;
};

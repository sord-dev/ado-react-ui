import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../config';
import { useNavigate } from 'react-router-dom';

import defaults from './default.json'

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

            defaults.states.forEach(state => {
                localStorage.removeItem(state)
            });
            
            await instance.logout();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user.token.expires != '' && new Date(user.token.expires) < new Date()) {
            console.log('Token Expired:', user.token.expires)
            handleLogout();
        }
    }, []);

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

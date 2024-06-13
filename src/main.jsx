import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/main.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './config.js';
import { MsalProvider } from '@azure/msal-react';
import { AuthContextProvider } from './contexts/authContext.jsx';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

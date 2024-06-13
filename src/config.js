export const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_APPREG_CLIENT_ID, // Your application (client) ID from Azure
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`, // Your tenant ID
        redirectUri: "http://localhost:5173" // Your redirect URI
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set to true if you are having issues on IE11 or Edge
    }
};

export const loginRequest = {
    scopes: ["User.Read"] // Add the scopes your application needs
};

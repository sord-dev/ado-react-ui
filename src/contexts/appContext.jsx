import React, { createContext, useContext, useState } from 'react';

// Create a new context with a default value
const AppContext = createContext(null);


const workItems = JSON.parse(localStorage.getItem('workItems')) || [];
const templates = JSON.parse(localStorage.getItem('templates')) || [
  {
    "_id": "66743b625257d2efd6045e9b",
    "name": "Pipeline Deployment Template",
    "type": "Task",
    "description": "Generic Pipeline deployment task template, optional ServiceNow CNG request ticket tracking inbuilt.",
    "createdBy": "Stefan Syrett",
    "lastUpdated": "2021-06-19T00:00:00.000Z",
    "attachments": 1,
  },
  {
    "_id": "66743b625257d2efd6045e9e",
    "name": "PowerPlatform Sprint User Story",
    "type": "User Story",
    "description": "PowerPlatform user story template, created each sprint, containing information about deployed hotfixes and support activities.",
    "createdBy": "Stefan Syrett",
    "lastUpdated": "2021-06-19T00:00:00.000Z",
    "attachments": 0,
  },
  {
    "_id": "66743b625257d2efd6045e9b",
    "name": "Pipeline Deployment Template",
    "type": "Task",
    "description": "Generic Pipeline deployment task template, optional ServiceNow CNG request ticket tracking inbuilt.",
    "createdBy": "Stefan Syrett",
    "lastUpdated": "2021-06-19T00:00:00.000Z",
    "attachments": 1,
  },
  {
    "_id": "66743b625257d2efd6045e9e",
    "name": "PowerPlatform Sprint User Story",
    "type": "User Story",
    "description": "PowerPlatform user story template, created each sprint, containing information about deployed hotfixes and support activities.",
    "createdBy": "Stefan Syrett",
    "lastUpdated": "2021-06-19T00:00:00.000Z",
    "attachments": 0,
  },
];

const defaultAppState = {
  workItems: workItems,
  templates: templates,
  selectedWorkItem: null,
  meta: { title: 'ADO Workbench', version: 'v0.0.1' },
  navOpen: true
}

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(defaultAppState);

  const handleSelectedWorkItem = (workItem) => {
    setAppState({ ...appState, selectedWorkItem: workItem });
  }

  const handleUpdateWorkItems = (workItems) => {
    localStorage.setItem('workItems', JSON.stringify(workItems));
    setAppState({ ...appState, workItems });
  }

  const handleUpdateNavState = (navOpen) => {
    setAppState({ ...appState, navOpen });
  }

  const handleAppTitle = (title) => {
    setAppState({ ...appState, meta: { ...appState.meta, title } });
  }

  return (
    <AppContext.Provider value={{ appState, handleSelectedWorkItem, handleAppTitle, handleUpdateWorkItems, handleUpdateNavState }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the new context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
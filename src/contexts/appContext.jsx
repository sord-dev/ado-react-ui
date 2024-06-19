import React, { createContext, useContext, useState } from 'react';

// Create a new context with a default value
const AppContext = createContext(null);


const workItems = JSON.parse(localStorage.getItem('workItems')) || [];
const defaultAppState = {
  workItems: workItems,
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
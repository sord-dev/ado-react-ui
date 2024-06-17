import React, { createContext, useContext, useState } from 'react';
import defaultData from './default.json' 

// Create a new context with a default value
const AppContext = createContext(null);

const defaultAppState = {
    workItems: defaultData.tasks,
    selectedWorkItem: null,
    meta: { title: 'ADO Workbench' }
}

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(defaultAppState);

  const handleSelectedWorkItem = (workItem) => {
    setAppState({ ...appState, selectedWorkItem: workItem });
  }

  const handleAppTitle = (title) => {
    setAppState({ ...appState, meta: {...appState.meta, title } });
  }

  return (
    <AppContext.Provider value={{ appState, handleSelectedWorkItem, handleAppTitle }}>
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
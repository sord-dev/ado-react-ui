import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar, ProtectedRoute } from './components'
import { Home, Login, NotFound, Templates, WorkItem } from './pages'
import WorkItems from './pages/WorkItems'
import { useAppContext } from './contexts/appContext';

// TODO: Implement WorkItemTemplates and WorkItemTemplateDetails
// TODO: Implement Workflows, WorkflowCreate, and Workflow
// TODO: Implement Connections and Settings
// TODO: Implement Deployments, DeploymentsCalender, and DeploymentDetails

function App() {
  const { appState } = useAppContext();
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar appState={appState} />}
      <div className={`main-container ${!appState.navOpen && 'nav-closed'}`}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoute children={<Home />} />} />
          {/* 
            <Route path="/connections" element={<ProtectedRoute children={<Connections />} />} />
            <Route path="/settings" element={<ProtectedRoute children={<Settings />} />} />
          */}

          <Route path="/work-items" >
            <Route index element={<ProtectedRoute children={<WorkItems />} />} />
            <Route path=":id" element={<ProtectedRoute children={<WorkItem />} />} />
          </Route>


          <Route path='/templates'>
            <Route index element={<ProtectedRoute children={<Templates />} />} />
            {/* <Route path=':id' element={<ProtectedRoute children={<WorkItemTemplateDetails />} />} /> */}
          </Route>

          {/* 
          <Route path="/deployments" >
            <Route index element={<ProtectedRoute children={<Deployments />} />} />
            <Route path="schedule" element={<ProtectedRoute children={<DeploymentsCalender />} />} />
            <Route path=":id" element={<ProtectedRoute children={<DeploymentDetails />} />} />
          </Route> 
          */}

          {/* 
          <Route path="/workflows" >
            <Route index element={<ProtectedRoute children={<Workflows />} />} />
            <Route path="create" element={<ProtectedRoute children={<WorkflowCreate />} />} />
            <Route path=":id" element={<ProtectedRoute children={<Workflow />} />} />
          </Route> 
          */}

          <Route path='*' element={<ProtectedRoute children={<NotFound />} />} />
        </Routes>
      </div>
    </>
  )
}

export default App

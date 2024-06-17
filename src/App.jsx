import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar, ProtectedRoute } from './components'
import { Home, Login, WorkItem } from './pages'
import WorkItems from './pages/WorkItems'
import { useAppContext } from './contexts/appContext';

function App() {
  const { appState } = useAppContext();
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar appState={appState} />}
      <div className="main-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute children={<Home />} />} />
          <Route path="/work-items" >
            <Route index element={<ProtectedRoute children={<WorkItems />} />} />
            <Route path=":id" element={<ProtectedRoute children={<WorkItem />} />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

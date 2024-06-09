import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home, WorkItem } from './pages'
import WorkItems from './pages/WorkItems'

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-items" >
            <Route index element={<WorkItems />} />
            <Route path=":id" element={<WorkItem/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

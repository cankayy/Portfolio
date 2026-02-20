import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import './App.css'

function App() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  return (
    <div className="app">
      {!isProjectPage && <Sidebar />}
      <main className={`main ${isProjectPage ? 'main--full-width' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

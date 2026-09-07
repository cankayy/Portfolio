import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CaseStudyPage from './pages/CaseStudyPage'
import './App.css'

function App() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  return (
    <div className="app">
      <main className={isProjectPage ? 'main main--full-width' : 'main-bare'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

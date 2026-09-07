import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CaseStudyPage from './pages/CaseStudyPage'
import SiteNav from './components/SiteNav'
import Cursor from './components/Cursor'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

/* Landing + About share a persistent left navbar; only the content fades. */
function NavLayout() {
  const location = useLocation()
  return (
    <>
      <SiteNav />
      <main className="main-bare">
        <div className="page-fade" key={location.pathname}>
          <Outlet />
        </div>
      </main>
    </>
  )
}

/* Project pages keep their own full-width wrapper, with the fade transition. */
function ProjectLayout() {
  const location = useLocation()
  return (
    <main className="main main--full-width">
      <div className="page-fade" key={location.pathname}>
        <CaseStudyPage />
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="/project/:id" element={<ProjectLayout />} />
      </Routes>
      <ThemeToggle />
      <Cursor />
    </div>
  )
}

export default App

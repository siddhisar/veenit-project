import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RequestProposal from './pages/RequestProposal.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ElectronicEvidencePage from './pages/ElectronicEvidencePage.jsx'
import MobileForensicsPage from './pages/MobileForensicsPage.jsx'

// Manage scroll on navigation: jump to top on a route change, and smooth-scroll
// to an in-page section when the URL carries a hash (works across routes too).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }
      // The target may not be mounted yet right after a route change — retry briefly.
      if (!scrollToHash()) {
        const t = setTimeout(scrollToHash, 300)
        return () => clearTimeout(t)
      }
      return undefined
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/electronic-evidence" element={<ElectronicEvidencePage />} />
        <Route path="/services/mobile-forensics" element={<MobileForensicsPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

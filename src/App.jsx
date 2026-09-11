import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RequestProposal from './pages/RequestProposal.jsx'

// Ensure each route change starts at the top (unless it's an in-page hash link)
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

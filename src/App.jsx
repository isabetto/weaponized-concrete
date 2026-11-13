import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Case from './pages/Case'
import Research from './pages/Research'
import About from './pages/About'
import Contact from './pages/Contact'

function useScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const scrollToTarget = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const pending = Array.from(document.images).filter((img) => !img.complete)
    if (pending.length === 0) {
      const frame = requestAnimationFrame(scrollToTarget)
      return () => cancelAnimationFrame(frame)
    }
    let remaining = pending.length
    const onSettle = () => {
      remaining -= 1
      if (remaining <= 0) scrollToTarget()
    }
    pending.forEach((img) => {
      img.addEventListener('load', onSettle, { once: true })
      img.addEventListener('error', onSettle, { once: true })
    })
    const fallback = setTimeout(scrollToTarget, 1500)
    return () => {
      pending.forEach((img) => {
        img.removeEventListener('load', onSettle)
        img.removeEventListener('error', onSettle)
      })
      clearTimeout(fallback)
    }
  }, [pathname, hash])
}

export default function App() {
  useScrollManager()
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/werk" element={<Work />} />
          <Route path="/werk/:slug" element={<Case />} />
          <Route path="/onderzoek" element={<Research />} />
          <Route path="/over-mij" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {pathname !== '/contact' && <Footer />}
      <Analytics />
    </div>
  )
}

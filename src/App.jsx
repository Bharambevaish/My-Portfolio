import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
const ChatBot = lazy(() => import('./components/ChatBot'))
import { ToastProvider } from './components/Toast'

export default function App() {
  // intro loader plays once per browser session
  const [loading, setLoading] = useState(() => {
    try { return !sessionStorage.getItem('intro-seen') } catch { return true }
  })
  useEffect(() => {
    if (!loading) { try { sessionStorage.setItem('intro-seen', '1') } catch { /* storage unavailable */ } }
  }, [loading])

  // Remove the boot cover only after React has drawn the page, so the
  // crawlable text version in index.html is never seen by visitors.
  useEffect(() => {
    const boot = document.getElementById('boot')
    if (!boot) return
    boot.style.transition = 'opacity .3s ease'
    requestAnimationFrame(() => {
      boot.style.opacity = '0'
      setTimeout(() => boot.remove(), 300)
    })
  }, [])

  return (
    <ToastProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero ready={!loading} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <aside aria-label="Quick actions">
        <BackToTop />
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      </aside>
    </ToastProvider>
  )
}

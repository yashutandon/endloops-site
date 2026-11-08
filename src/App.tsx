import { useState, useEffect } from 'react'
import { PageId } from './types'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import ToolsPage from './pages/ToolsPage'
import InteractiveDemoPage from './pages/InteractiveDemoPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  // Initialize and synchronize route with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase()
      const validPages: PageId[] = ['home', 'solutions', 'tools', 'demo', 'about', 'contact']
      if (validPages.includes(rawHash as PageId)) {
        setCurrentPage(rawHash as PageId)
      } else if (!rawHash) {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page)
    window.location.hash = `#/${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-navy antialiased selection:bg-brand selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl focus:ring-2 focus:ring-brand"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Nav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content Area with Smooth Page Transition on Route Change */}
      <main id="main-content" className="flex-1 animate-page-enter" key={currentPage}>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />
        )}
        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />
        )}
        {currentPage === 'tools' && (
          <ToolsPage
            onNavigate={handleNavigate}
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />
        )}
        {currentPage === 'demo' && (
          <InteractiveDemoPage
            onNavigate={handleNavigate}
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestDemo={() => setIsDemoModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  )
}

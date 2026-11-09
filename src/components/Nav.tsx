import { useState, useEffect } from 'react'
import { PageId } from '../types'
import { IconMenu, IconX, IconArrowRight, IconShield } from './Icons'

interface NavProps {
  currentPage: PageId
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

const navLinks: { index: string; id: PageId; label: string; badge?: string }[] = [
  { index: '01', id: 'solutions', label: 'Solutions', badge: 'End-to-End' },
  { index: '02', id: 'tools', label: 'Tools', badge: 'Standalone' },
  { index: '03', id: 'demo', label: 'Live Demo', badge: 'Interactive' },
  { index: '04', id: 'about', label: 'About Us' },
  { index: '05', id: 'contact', label: 'Contact' },
]

export default function Nav({ currentPage, onNavigate, onRequestDemo }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dubaiTime, setDubaiTime] = useState('')

  // Hysteresis scroll listener with requestAnimationFrame (Zero layout jank, 120fps smooth)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY
          setScrolled((prev) => {
            if (!prev && y > 24) return true
            if (prev && y < 8) return false
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate live Dubai time (GST: UTC+4)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }
      setDubaiTime(new Intl.DateTimeFormat('en-US', options).format(now))
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavClick = (page: PageId) => {
    onNavigate(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Top micro-bar in normal document flow - scrolls away natively without height/layout shifts */}
      {/* <div className="hidden border-b border-slate-100 bg-slate-50/80 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-500 sm:block">
        <div className="mx-auto flex max-w-8xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 font-medium text-brand">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-2xl bg-leaf opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-2xl bg-brand" />
              </span>
              Dubai HQ · Serving UAE &amp; GCC
            </span>
            <span className="text-slate-300">|</span>
            <span>Born inside Alkazim Accounting &amp; Audit</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="tabular-nums">
              Dubai Time (GST): <strong className="text-navy font-mono">{dubaiTime || '11:00 AM'}</strong>
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-leaf/10 px-2 py-0.5 font-semibold text-brand">
              <IconShield className="size-3" /> UAE Data Compliant
            </span>
          </div>
        </div>
      </div> */}

      {/* Sticky Navbar with Slow & Buttery Smooth Width Transition (max-w-8xl -> max-w-7xl) */}
      <header className="sticky top-0 z-50 w-full pointer-events-none flex justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center">
          <nav
            aria-label="Main Navigation"
            style={{
              transform: scrolled ? 'translate3d(0, 8px, 0)' : 'translate3d(0, 0, 0)',
            }}
            className={`pointer-events-auto mx-auto w-full flex h-16 items-center justify-between px-5 sm:px-7 nav-pill-transition ${scrolled
              ? 'max-w-7xl rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/8'
              : 'max-w-8xl rounded-none bg-white backdrop-blur-xl border border-slate-200/50 shadow-none'
              }`}
          >
            {/* Logo on Left - Constant position, zero layout shift */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex shrink-0 items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-1 cursor-pointer"
              aria-label="Endloops - Return to homepage"
            >
              <img
                src="/logo.png"
                alt="Endloops"
                className="h-8 w-auto max-w-[160px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </button>

            {/* Desktop Numbered Links (Matching Visual Mechanics with Original Colors) */}
            <ul className="hidden shrink-0 items-center gap-1 lg:flex">
              {navLinks.map((item) => {
                const isActive = currentPage === item.id
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`group flex items-center rounded-2xl px-3.5 py-1.5 text-[13px] transition-all duration-300 duration-150 cursor-pointer ${isActive
                        ? 'bg-navy text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-navy hover:bg-slate-100/80 font-medium'
                        }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="tracking-tight">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`ml-1.5 text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-2xl transition-colors ${isActive
                            ? 'bg-leaf/25 text-emerald-200'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-brand/10 group-hover:text-brand'
                            }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Action CTAs */}
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <button
                onClick={() => handleNavClick('contact')}
                className="text-xs font-semibold text-slate-600 hover:text-navy transition-colors px-2 py-1 cursor-pointer"
              >
                Talk to Team
              </button>
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-1.5 rounded-2xl bg-brand px-5 py-2 text-xs font-semibold tracking-tight text-white shadow-xs shadow-brand/20 transition-all duration-300 duration-150 hover:bg-brand-dark hover:shadow-md hover:shadow-brand/30 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request Demo</span>
                <IconArrowRight className="size-3.5 text-white" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <button
                onClick={onRequestDemo}
                className="rounded-2xl bg-brand px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-brand-dark transition-colors cursor-pointer"
              >
                Demo
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2 text-navy hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <IconX className="size-5" /> : <IconMenu className="size-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Drawer Menu (Floating Island Style) */}
          {mobileOpen && (
            <div
              id="mobile-navigation"
              className="pointer-events-auto mt-2 w-full rounded-3xl border border-slate-200/90 bg-white/95 p-5 text-navy shadow-2xl backdrop-blur-2xl lg:hidden animate-page-enter"
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</span>
                <span className="text-xs text-brand font-mono font-medium">Dubai Time: {dubaiTime}</span>
              </div>
              <ul className="space-y-1.5">
                {navLinks.map((item) => {
                  const isActive = currentPage === item.id
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${isActive
                          ? 'bg-navy text-white'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-navy'
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`font-mono text-xs ${isActive ? 'text-leaf' : 'text-brand'}`}>{item.index}</span>
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-2xl ${isActive ? 'bg-leaf/25 text-emerald-200' : 'bg-slate-100 text-slate-600'
                              }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    onRequestDemo()
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-center text-sm font-bold text-white shadow-md shadow-brand/20 hover:bg-brand-dark transition-colors cursor-pointer"
                >
                  <span>Schedule Institutional Demo</span>
                  <IconArrowRight className="size-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

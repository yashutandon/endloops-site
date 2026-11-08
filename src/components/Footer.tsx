import { PageId } from '../types'
import { IconShield, IconMapPin, IconMail, IconPhone, IconCheckCircle } from './Icons'

interface FooterProps {
  onNavigate: (page: PageId) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
      {/* Top Banner / Trust Bar */}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <div className="inline-block rounded-xl bg-white p-3 shadow-sm">
              <img
                src="/logo.png"
                alt="Endloops"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Endloops automates financial and audit operations for accounting firms, corporate finance teams, and property management companies across the GCC.
            </p>
            <p className="mt-3 max-w-sm text-sm font-medium text-emerald-400">
              The software prepares the work. The professional reviews and decides.
            </p>

            <div className="mt-6 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <IconMapPin className="size-4 shrink-0 text-brand-light mt-0.5" />
                <span>Dubai International Financial Centre (DIFC) &amp; Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <IconMail className="size-4 shrink-0 text-brand-light" />
                <a href="mailto:inquiries@endloops.ae" className="hover:text-white transition-colors">inquiries@endloops.ae</a>
              </div>
              <div className="flex items-center gap-2.5">
                <IconPhone className="size-4 shrink-0 text-brand-light" />
                <a href="tel:+97142889400" className="hover:text-white transition-colors">+971 4 288 9400 (Dubai Office)</a>
              </div>
            </div>
          </div>

          {/* End-to-End Solutions */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              End-to-End Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Budget Review Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Escrow Audit &amp; RERA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Financial Audit Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Interim Continuous Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Property Budget Prep (Mollak)
                </button>
              </li>
            </ul>
          </div>

          {/* Standalone Tools */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Standalone Tools
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Purchase-Order Extraction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Vouching 3-Way Matching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Expense Working Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Financial Report Footing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Tender Verification (BOQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Multi-Way Reconciliation
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Interactive */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Platform &amp; Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('demo')}
                  className="hover:text-emerald-300 transition-colors text-left font-medium text-emerald-400"
                >
                  Interactive Tool Sandbox ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Our Dubai Heritage (Alkazim)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Human-in-the-Loop Standard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Join Engineering &amp; Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-emerald-300 transition-colors text-left font-semibold text-white"
                >
                  Request Institutional Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Endloops Technologies Ltd. All rights reserved. Registered in Dubai, UAE.</p>
        </div>
      </div>
    </footer>
  )
}

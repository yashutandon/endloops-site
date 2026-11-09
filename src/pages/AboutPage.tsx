import { PageId } from '../types'
import {
  IconShield,
  IconCheckCircle,
  IconArrowRight,
  IconBuilding,
  IconUsers,
  IconAward,
  IconLock,
  IconSparkles,
} from '../components/Icons'

interface AboutPageProps {
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

export default function AboutPage({ onNavigate, onRequestDemo }: AboutPageProps) {
  return (
    <div className="space-y-20 py-12 sm:space-y-28 sm:py-16">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase">
            <IconBuilding className="size-3.5" />
            <span>Our Dubai Heritage &amp; Vision</span>
          </div>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-navy leading-[1.08]">
            Born inside an audit firm. Built for financial trust.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Over the years, the technology department of an accounting and audit firm in Dubai built software to automate complex financial work. That department is now Endloops-an independent company dedicated to empowering financial professionals.
          </p>
        </div>
      </section>

      {/* STORY & HERITAGE NARRATIVE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-base text-slate-700 leading-relaxed">
            <h2 className="font-display text-3xl font-extrabold text-navy">
              Why we started: The need we address
            </h2>
            <p>
              Much of a finance professional&apos;s day goes into tasks that software can handle. Vouching transactions against purchase orders, cross-checking bank escrow releases against engineer certificates, footing draft financial reports, and hunting for duplicate invoices.
            </p>
            <p>
              This work is repetitive and time-consuming, leaves room for human error, and takes precious attention away from professional judgement and from clients.
            </p>
            <p>
              Generic software and Silicon Valley AI wrappers often fail financial practitioners because they promise total replacement-and then hallucinate numbers, miscalculate VAT, or fail to produce an audit-ready lead sheet.
            </p>

            <div className="rounded-2xl border-l-4 border-brand bg-mist p-5 my-6">
              <h3 className="font-display text-lg font-bold text-navy">
                Our approach is simple:
              </h3>
              <p className="mt-1 font-semibold text-brand-dark text-base">
                The software prepares the work, and the professional reviews and decides.
              </p>
              <p className="mt-2 text-xs text-slate-600">
                We take care of the repetitive tasks, and the final sign-off always stays with people.
              </p>
            </div>

            <p>
              Because our technology was born directly inside a practicing firm in Dubai, our software was tested, stressed, and refined on actual client accounts, actual UAE VAT filings, and statutory Dubai RERA escrow audits.
            </p>
          </div>

          {/* Visual Trust Card */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold block mb-4">
              Foundational Principles
            </span>

            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-200/70">
                <IconCheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy block font-display text-sm">Deterministic Precision</strong>
                  <span className="text-slate-600">Rules are mathematical and transparent, never statistical guesses.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-200/70">
                <IconShield className="size-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy block font-display text-sm">Human Final Sign-Off</strong>
                  <span className="text-slate-600">The software prepares the draft papers; the professional always signs.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-200/70">
                <IconLock className="size-5 text-royal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy block font-display text-sm">UAE &amp; GCC Data Sovereignty</strong>
                  <span className="text-slate-600">Encrypted in-country processing complying with UAE institutional standards.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE WE ARE HEADING (From Brief) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-14 text-white text-center shadow-2xl">
          {/* Subtle ambient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <span className="rounded-2xl bg-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
              Where We Are Heading
            </span>
            <h2 className="font-display mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              To become the trusted automation partner for accounting, audit, and property finance teams across the GCC and beyond.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We are expanding across the UAE, Saudi Arabia, and the wider GCC region. To support this growth, we are continuously expanding our engineering, design, and quality capabilities.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8 w-full max-w-2xl mx-auto flex flex-col items-center text-center">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Join Us &amp; Shape How Endloops Looks, Feels and Works
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
                We believe exceptional design and bulletproof engineering go hand in hand. If you are passionate about building products that finance professionals rely on for critical decisions, we invite you to talk to us.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="rounded-2xl bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-light hover:shadow-brand/50 transition-all duration-300 cursor-pointer"
                >
                  Contact Our Leadership Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & DATA COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <IconLock className="size-3.5" />
            <span>Institutional Governance</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Built for firms that clients trust with sensitive financial data
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <IconShield className="size-6 text-brand mb-3" />
            <h3 className="font-display text-base font-bold text-navy">In-Country UAE Processing</h3>
            <p className="mt-2 text-xs text-slate-600">
              Client data remains within compliant GCC sovereign infrastructure with full audit logs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <IconLock className="size-6 text-royal mb-3" />
            <h3 className="font-display text-base font-bold text-navy">AES-256 Encryption</h3>
            <p className="mt-2 text-xs text-slate-600">
              Bank-grade encryption in transit (TLS 1.3) and at rest across all document payloads.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <IconCheckCircle className="size-6 text-teal mb-3" />
            <h3 className="font-display text-base font-bold text-navy">Zero Public Model Training</h3>
            <p className="mt-2 text-xs text-slate-600">
              Your financial records are never used to train or fine-tune public machine learning models.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <IconAward className="size-6 text-amber-500 mb-3" />
            <h3 className="font-display text-base font-bold text-navy">Role-Based Access</h3>
            <p className="mt-2 text-xs text-slate-600">
              Granular partner, manager, and auditor role permissions matching professional standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


import { PageId } from '../types'
import ToolVisualizer from '../components/ToolVisualizer'
import {
  IconSparkles,
  IconShield,
  IconCheck,
  IconArrowRight,
  IconFileText,
  IconLayers,
  IconAlertTriangle,
  IconCalculator,
} from '../components/Icons'

interface InteractiveDemoPageProps {
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

export default function InteractiveDemoPage({ onNavigate, onRequestDemo }: InteractiveDemoPageProps) {
  return (
    <div className="space-y-16 py-12 sm:space-y-24 sm:py-16">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase">

            <span>Interactive Technology Sandbox</span>
          </div>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-navy leading-[1.08]">
            See the Endloops engine in action.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Experience how our software ingests physical and digital vouchers, performs three-way matching against general ledgers, evaluates rigid audit rules, and prepares structured lead schedules with human sign-off.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 border border-slate-200">
              <IconCheck className="size-4 text-brand" /> Interactive Batch Testing
            </span>
            <span className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 border border-slate-200">
              <IconShield className="size-4 text-brand" /> 100% Deterministic Rules
            </span>
            <span className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 border border-slate-200">
              <IconLayers className="size-4 text-brand" /> UAE VAT 5% Compliance
            </span>
          </div>
        </div>
      </section>

      {/* THE LIVE VISUALIZER ENGINE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ToolVisualizer />
      </section>

      {/* WHAT OUR TECHNOLOGY CAN DO (Directly from prompt requirements!) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What our technology can do
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Built specifically to solve the repetitive bottlenecks in accounting, audit, and property finance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand mb-5">
              <IconFileText className="size-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">Read documents</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Extracts figures and details from invoices, purchase orders, contracts, bank statements, and engineer certificates without manual keying or typing.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal mb-5">
              <IconLayers className="size-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">Compare and match</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Checks documents against general ledgers, purchase orders, and delivery notes-or compares subcontractor quotes side-by-side against tender requirements.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-5">
              <IconAlertTriangle className="size-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">Check against rules</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Flags missing documentation, mismatched totals, duplicate voucher submissions, UAE 5% VAT errors, and anything outside agreed governance limits.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-royal/10 text-royal mb-5">
              <IconCalculator className="size-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">Prepare drafts</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Produces lead schedules, working papers, and variance reports formatted to international auditing standards, ready for professional sign-off.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet/10 text-violet mb-5">

            </div>
            <h3 className="font-display text-xl font-bold text-navy">Handle bulk work</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Processes hundreds of invoices and transaction rows in parallel in minutes, turning days of junior staff vouching into instant review sessions.
            </p>
          </div>

          <div className="rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/5 to-teal/5 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand text-white mb-5">
                <IconShield className="size-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">You decide</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                The software prepares the work. The professional reviews every exception, applies professional skepticism, and makes the final sign-off call.
              </p>
            </div>
            <button
              onClick={onRequestDemo}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors"
            >
              <span>Test on your own documents</span>
              <IconArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-center text-white">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
            Want to see this running on your firm&apos;s actual sample documents?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Send us 10 sample vouchers or purchase orders under NDA. We will run them through the Endloops engine and show you the generated working paper.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="rounded-2xl bg-brand px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-light transition-all duration-300"
            >
              Request Sample Document Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


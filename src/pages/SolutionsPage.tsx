import { useState } from 'react'
import { PageId, SolutionItem } from '../types'
import { solutionsData } from '../data'
import {
  IconCheck,
  IconCheckCircle,
  IconShield,
  IconArrowRight,
  IconBuilding,
  IconLayers,
  IconFileText,
  IconSparkles,
} from '../components/Icons'

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

export default function SolutionsPage({ onNavigate, onRequestDemo }: SolutionsPageProps) {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(solutionsData[0].id)
  const currentSolution = solutionsData.find((s) => s.id === selectedSolutionId) || solutionsData[0]

  return (
    <div className="space-y-20 py-12 sm:space-y-28 sm:py-16">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase">
            <IconLayers className="size-3.5" />
            <span>End-to-End Financial Systems</span>
          </div>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-navy leading-[1.08]">
            Complete software that runs an entire financial service from start to finish.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            When you want a connected system to intake client ledgers and documents, execute deterministic audit rules, and produce fully referenced working papers ready for partner sign-off.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-xs sm:text-sm font-semibold tracking-tight text-white shadow-xs shadow-brand/20 hover:bg-brand-dark transition-all duration-300"
            >
              <span>Schedule Solution Walkthrough</span>
              <IconArrowRight className="size-4" />
            </button>
            <button
              onClick={() => onNavigate('tools')}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-tight text-navy hover:bg-slate-50 transition-all duration-300"
            >
              <span>Looking for Standalone Tools instead?</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SOLUTION SELECTOR & DEEP-DIVE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Solution Pills Tablist */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
          {solutionsData.map((sol) => {
            const isSelected = sol.id === currentSolution.id
            return (
              <button
                key={sol.id}
                onClick={() => setSelectedSolutionId(sol.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold tracking-tight transition-all duration-300 duration-150 ${isSelected
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-navy border border-slate-200/80'
                  }`}
              >
                <span>{sol.name}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Solution Detail Card */}
        <div key={currentSolution.id} className="animate-page-enter mt-6 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-navy/5">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-2xl bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  {currentSolution.status}
                </span>
                <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Target: {currentSolution.audience}
                </span>
              </div>

              <div>
                <h2 className="font-display text-3xl font-extrabold text-navy">
                  {currentSolution.name}
                </h2>
                <p className="mt-2 text-base font-semibold text-brand-dark">
                  {currentSolution.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {currentSolution.description}
                </p>
              </div>

              {/* Compliance & Regulatory Anchor */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs">
                <div className="flex items-center gap-2 font-bold text-emerald-900 mb-1">
                  <IconShield className="size-4 text-emerald-600" />
                  <span>Regulatory Standard:</span>
                </div>
                <p className="text-emerald-800 font-medium">
                  {currentSolution.compliance}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h3 className="font-display text-base font-extrabold text-navy mb-3">
                  Engineered Capabilities:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {currentSolution.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200/60">
                      <IconCheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Pipeline Architecture Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Inputs &amp; Outputs Architecture
                </h3>

                {/* Ingestion */}
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-2">
                    Ingested Data Sources:
                  </span>
                  <div className="space-y-1.5">
                    {currentSolution.inputs.map((inp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                        <IconFileText className="size-3.5 text-slate-400 shrink-0" />
                        <span>{inp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compilation Output */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-royal block mb-2">
                    Audit Deliverables Generated:
                  </span>
                  <div className="space-y-1.5">
                    {currentSolution.outputs.map((out, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-navy bg-white p-2.5 rounded-lg border border-slate-200">
                        <IconCheck className="size-3.5 text-emerald-600 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Measurable Efficiency:</span>
                  <span className="font-bold text-brand bg-brand/10 px-2.5 py-1 rounded">
                    {currentSolution.timeSaved}
                  </span>
                </div>
                <button
                  onClick={onRequestDemo}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-xs font-bold text-white shadow-sm hover:bg-navy-light transition-all duration-300"
                >
                  <span>Request Demo of {currentSolution.name}</span>
                  <IconArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX: WHY ENDLOOPS WINS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <span>Rigorous Comparison</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why financial professionals choose Endloops
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Accounting and audit work leaves no margin for statistical hallucinations or ungrounded estimates.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Capability / Metric</th>
                <th className="py-4 px-6 text-slate-400">Traditional Manual Audit</th>
                <th className="py-4 px-6 text-slate-400">Generic AI Chat Assistants</th>
                <th className="py-4 px-6 bg-brand/10 text-brand font-extrabold">Endloops Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-4 px-6 font-bold text-navy">Math &amp; Footing Reliability</td>
                <td className="py-4 px-6 text-slate-500">Prone to human fatigue</td>
                <td className="py-4 px-6 text-amber-600">Unreliable (hallucinates figures)</td>
                <td className="py-4 px-6 font-bold text-brand bg-brand/5">100% Deterministic Rule Engine</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-navy">Audit Trail &amp; Workpapers</td>
                <td className="py-4 px-6 text-slate-500">Manual Excel formatting (days)</td>
                <td className="py-4 px-6 text-slate-400">Text summaries only</td>
                <td className="py-4 px-6 font-bold text-brand bg-brand/5">Standard lead schedules with links</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-navy">Dubai RERA &amp; FTA Calibration</td>
                <td className="py-4 px-6 text-slate-500">Requires senior review time</td>
                <td className="py-4 px-6 text-red-600">No regulatory awareness</td>
                <td className="py-4 px-6 font-bold text-brand bg-brand/5">Built natively for UAE &amp; GCC laws</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-navy">Data Privacy &amp; Sovereignty</td>
                <td className="py-4 px-6 text-slate-500">Internal files</td>
                <td className="py-4 px-6 text-amber-600">Risk of public model training</td>
                <td className="py-4 px-6 font-bold text-brand bg-brand/5">UAE In-Country Data Residency</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-navy">Final Sign-Off Accountability</td>
                <td className="py-4 px-6 text-slate-500">Auditor reviews everything</td>
                <td className="py-4 px-6 text-slate-400">Opaque machine generation</td>
                <td className="py-4 px-6 font-bold text-brand bg-brand/5">Human-in-the-loop: software drafts, you sign</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
            Discuss a solution for your firm
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Our Dubai-based engineering team works directly with partners to calibrate rules to your specific engagement requirements.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="rounded-2xl bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-dark transition-all duration-300"
            >
              Request Institutional Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


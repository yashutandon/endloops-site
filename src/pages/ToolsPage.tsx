import { useState } from 'react'
import { PageId, ToolItem } from '../types'
import { toolsData } from '../data'
import {
  IconCheck,
  IconCheckCircle,
  IconArrowRight,
  IconSearch,
  IconFilter,
  IconSparkles,
  IconSliders,
  IconFileText,
  IconLayers,
} from '../components/Icons'

interface ToolsPageProps {
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

export default function ToolsPage({ onNavigate, onRequestDemo }: ToolsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'Ingestion', 'Verification', 'Reconciliation', 'Review']

  const filteredTools = toolsData.filter((tool) => {
    const matchesCat = selectedCategory === 'All' || tool.category === selectedCategory
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="space-y-16 py-12 sm:space-y-24 sm:py-16">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 border border-blue-200/60 px-3 py-1 text-xs font-semibold tracking-wider text-royal uppercase">
            <IconSliders className="size-3.5" />
            <span>Modular Standalone Tools</span>
          </div>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-navy leading-[1.08]">
            Focused tools that solve one specific financial friction point.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Every tool works independently on its own. Integrate directly into your existing ERP or spreadsheet workflows without adopting a complex enterprise suite.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('demo')}
              className="inline-flex items-center gap-2 rounded-2xl bg-navy px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-tight text-white shadow-xs hover:bg-navy-light transition-all duration-300"
            >
              <span>Launch Live Vouching Visualizer</span>
            </button>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-tight text-white shadow-xs shadow-brand/20 hover:bg-brand-dark transition-all duration-300"
            >
              <span>Request Standalone API Access</span>
              <IconArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white border border-slate-200/80 p-3 shadow-2xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 duration-150 ${selectedCategory === cat
                  ? 'bg-navy text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-navy'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <IconSearch className="size-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, rules, formats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3.5 py-1.5 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div key={selectedCategory + searchQuery} className="animate-page-enter mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="hover-lift flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm hover:border-royal/40 transition-all duration-300 duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-2xl bg-royal/10 px-3 py-1 text-xs font-bold text-royal">
                    {tool.category}
                  </span>
                  <span className="rounded-2xl bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    {tool.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-navy">{tool.name}</h3>
                <p className="mt-2 text-xs font-semibold text-slate-700">{tool.tagline}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{tool.description}</p>

                {/* Key Stat Box */}
                <div className="mt-5 rounded-2xl bg-mist p-3.5 border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Proven Reliability Metric:
                  </span>
                  <span className="font-display text-sm font-extrabold text-brand-dark block mt-0.5">
                    {tool.highlightStat}
                  </span>
                </div>

                {/* Rules Enforced */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Rules Evaluated:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {tool.rulesEnforced.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formats */}
                <div className="mt-5 border-t border-slate-100 pt-4 text-[11px] text-slate-500 space-y-1">
                  <div>
                    <strong className="text-slate-700">Inputs:</strong> {tool.inputFormats.join(', ')}
                  </div>
                  <div>
                    <strong className="text-slate-700">Outputs:</strong> {tool.outputFormats.join(', ')}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 border-t border-slate-100 pt-5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {tool.typicalVolume}
                </span>

                <button
                  onClick={() => {
                    if (tool.id === 'vouching-automation' || tool.id === 'po-extraction') {
                      onNavigate('demo')
                    } else {
                      onRequestDemo()
                    }
                  }}
                  className="inline-flex items-center gap-1.5 rounded-2xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-colors"
                >
                  <span>{tool.id === 'vouching-automation' ? 'Test Simulator' : 'Request Tool'}</span>
                  <IconArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
              Need a custom rule or proprietary format?
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-lg">
              Our engineering team regularly adds new document templates, custom ERP connectors, and specific industry check-rules.
            </p>
          </div>
          <button
            onClick={onRequestDemo}
            className="rounded-2xl bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-light transition-all duration-300 shrink-0"
          >
            Consult Our Engineering Team
          </button>
        </div>
      </section>
    </div>
  )
}


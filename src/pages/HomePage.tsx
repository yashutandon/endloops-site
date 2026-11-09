import { useState, useEffect } from 'react'
import { PageId } from '../types'
import { solutionsData, toolsData, workflowSteps, personasData, testimonialsData } from '../data'
import ToolVisualizer from '../components/ToolVisualizer'
import RoiCalculator from '../components/RoiCalculator'
import {
  IconCheck,
  IconCheckCircle,
  IconShield,
  IconArrowRight,
  IconArrowLeft,
  IconArrowUpRight,
  IconSparkles,
  IconLayers,
  IconFileText,
  IconAlertTriangle,
  IconBuilding,
  IconUsers,
  IconAward,
  IconPlay,
  IconPause,
  IconRotateCw,
  IconQuote,
  IconMousePointer,
  IconCursorClick,
} from '../components/Icons'

interface HomePageProps {
  onNavigate: (page: PageId) => void
  onRequestDemo: () => void
}

export default function HomePage({ onNavigate, onRequestDemo }: HomePageProps) {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0)
  const [isWorkflowPlaying, setIsWorkflowPlaying] = useState(true)
  const [workflowProgress, setWorkflowProgress] = useState(0)
  const [isWorkflowHovered, setIsWorkflowHovered] = useState(false)
  const [activeOfferingTab, setActiveOfferingTab] = useState<'solutions' | 'tools'>('solutions')
  const [isHeroCardFlipped, setIsHeroCardFlipped] = useState(false)

  const STEP_DURATION_MS = 4500 // 4.5s per step gives ample time to read

  // Auto-advancing loop with smooth progress
  useEffect(() => {
    if (!isWorkflowPlaying || isWorkflowHovered) {
      return
    }

    const intervalTime = 50 // 50ms ticks for fluid progress bar
    const increment = (intervalTime / STEP_DURATION_MS) * 100

    const timer = setInterval(() => {
      setWorkflowProgress((prev) => {
        if (prev >= 100) {
          setActiveWorkflowIndex((cur) => (cur + 1) % workflowSteps.length)
          return 0
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isWorkflowPlaying, isWorkflowHovered, activeWorkflowIndex])

  const handleSelectStep = (idx: number) => {
    setActiveWorkflowIndex(idx)
    setWorkflowProgress(0)
    setIsWorkflowPlaying(false) // pause loop so user can read that step!
  }

  const handleTogglePlay = () => {
    if (!isWorkflowPlaying) {
      setWorkflowProgress(0)
      setIsWorkflowPlaying(true)
    } else {
      setIsWorkflowPlaying(false)
    }
  }

  const handlePrevStep = () => {
    setActiveWorkflowIndex((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length)
    setWorkflowProgress(0)
  }

  const handleNextStep = () => {
    setActiveWorkflowIndex((prev) => (prev + 1) % workflowSteps.length)
    setWorkflowProgress(0)
  }

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white pt-10 pb-12 sm:pt-16 sm:pb-14">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-r from-leaf/20 via-teal/15 to-royal/15 blur-3xl pointer-events-none rounded-2xl animate-ambient-mesh" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Value Proposition & CTAs (7 cols) */}
            <div className="lg:col-span-7 rise">

              <h1 className="font-display mt-5 text-4xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-[-0.035em] text-navy leading-[1.08]">
                The software prepares the work.{' '}
                <span className="shimmer-text">You make the call.</span>
              </h1>



              {/* Core Philosophy Accent Callout */}
              <div className="mt-5 inline-flex items-center gap-2.5 rounded-2xl bg-white/85 border border-slate-200/80 px-3.5 py-2 w-fit max-w-full shadow-2xs backdrop-blur-xs">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-brand shrink-0">
                  <IconShield className="size-4" />
                </div>
                <p className="text-xs font-medium text-slate-600">
                  <strong className="text-navy font-semibold">Core Principle:</strong> We automate the repetitive preparation; final sign-off always stays with people.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onRequestDemo}
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold tracking-tight text-white shadow-xs shadow-brand/20 transition-all duration-200 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Request Private Demo</span>
                  <IconArrowRight className="size-4" />
                </button>

                <button
                  onClick={() => onNavigate('demo')}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-semibold tracking-tight text-navy shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Try Interactive Sandbox</span>
                  <IconArrowUpRight className="size-4 text-brand" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-9 grid grid-cols-3 gap-6 border-t border-slate-200/70 pt-6 text-xs">
                <div>
                  <span className="font-mono text-sm sm:text-base font-bold text-navy block tracking-tight">0% Hallucination</span>
                  <span className="text-slate-400 font-medium text-[11px]">Deterministic Rules</span>
                </div>
                <div>
                  <span className="font-mono text-sm sm:text-base font-bold text-navy block tracking-tight">RERA Aligned</span>
                  <span className="text-slate-400 font-medium text-[11px]">Dubai Escrow Trust Ready</span>
                </div>
                <div>
                  <span className="font-mono text-sm sm:text-base font-bold text-navy block tracking-tight">UAE Sovereign</span>
                  <span className="text-slate-400 font-medium text-[11px]">Institutional Encryption</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Flipping Card with Reflection (5 cols) */}
            <div className="lg:col-span-5 rise [animation-delay:150ms] relative">
              {/* Subtle ambient mesh breathing aura */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-leaf/20 via-teal/20 to-royal/20 blur-2xl -z-10 animate-aura-pulse pointer-events-none" />

              {/* 3D Flip Card Container */}
              <div
                className="group perspective-1200 cursor-pointer select-none relative"
                onClick={() => setIsHeroCardFlipped((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setIsHeroCardFlipped((prev) => !prev)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Interactive Audit Batch Card. Hover cursor or tap to flip and view Endloops mission quote."
              >
                {/* Magnetic "Hover Here" Invitation Callout (Attracts Cursor to Card) */}
                <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-all duration-300 duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:translate-y-2">
                  <div className="animate-callout-bob flex items-center gap-2 rounded-2xl  text-white px-4 py-1.5 shadow-2xl shadow-brand/40 ring-2 ring-leaf/60 border border-leaf/30 backdrop-blur-md whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <IconCursorClick className="size-3.5 text-teal animate-bounce" />
                      <span className="font-semibold text-[11px]  text-slate-800">Move cursor over card</span>
                      <span className="text-slate-500 text-[11px] hidden sm:inline">· reveals core doctrine</span>
                    </div>
                  </div>
                  {/* Pointer tick pointing down onto the card */}
                  <div className="w-2.5 h-2.5 bg-emerald-500 rotate-45 mx-auto -mt-1 ring-b-2 ring-r-2 ring-leaf/60 border-r border-b border-white/20" />
                </div>

                {/* 3D Card Flipper Inner */}
                <div
                  className={`relative w-full preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.34,1.25,0.64,1)] ${isHeroCardFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                    }`}
                >
                  {/* Dynamic Sheen Sweep on hover + Idle periodic gleam */}
                  <div className="reflection-sheen animate-idle-sheen rounded-3xl" />

                  {/* ================= FRONT FACE: Live Audit Vouching Batch Card ================= */}
                  <div className="backface-hidden relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xl shadow-teal/15 ring-1 ring-slate-100 reflection-surface overflow-hidden">
                    {/* Floating pill & Flip Hint */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                          <IconLayers className="size-5" />
                        </div>
                        <div>
                          <p className="font-display text-sm font-bold text-navy">Live Audit Vouching Batch</p>
                          <p className="text-[11px] text-slate-400">Client: Alkazim Assets LLC · Q3 Interim</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-2xl bg-violet/10 px-3 py-1 text-xs font-bold text-violet">
                          Ready for Review
                        </span>
                      </div>
                    </div>

                    {/* Elegant Gauge Progress Bar */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                          <span className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                          <span>248 Vouchers Processed</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50/90 border border-emerald-200/70 px-2 py-0.5 rounded-md shadow-2xs">
                          99.2% Clean Match
                        </span>
                      </div>

                      {/* Recessed Inset Track with High-Precision Gauge Bezel */}
                      <div className="relative h-2.5 w-full rounded-full bg-slate-100/90 p-[2px] border border-slate-200/70 shadow-inner overflow-hidden">
                        {/* Luminous Emerald Fill */}
                        <div
                          className="relative h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.4)] overflow-hidden transition-all duration-500"
                          style={{ width: '99.2%' }}
                        >
                          {/* Ambient Glass Shimmer Beam */}
                          <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-progress-shimmer pointer-events-none" />

                          {/* Leading-Edge Luminous Pip */}
                          <div className="absolute right-0 top-0 bottom-0 w-1 rounded-full bg-white/95 shadow-[0_0_6px_#fff]" />
                        </div>
                      </div>
                    </div>

                    {/* Sample Exception Items */}
                    <ul className="mt-5 space-y-2.5 text-xs">
                      <li className="flex items-center justify-between rounded-xl bg-amber-50/80 border border-amber-200/70 p-3">
                        <div className="flex items-center gap-2.5">
                          <span className="size-2.5 rounded-2xl bg-amber-500 shrink-0" />
                          <div>
                            <span className="font-mono font-bold text-navy">INV-2041</span>
                            <p className="text-slate-600">Total AED 12,480 vs Ledger AED 12,408 (+AED 72)</p>
                          </div>
                        </div>
                        <span className="rounded bg-amber-200/60 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                          FLAGGED
                        </span>
                      </li>

                      <li className="flex items-center justify-between rounded-xl bg-red-50/80 border border-red-200/70 p-3">
                        <div className="flex items-center gap-2.5">
                          <span className="size-2.5 rounded-2xl bg-red-500 shrink-0" />
                          <div>
                            <span className="font-mono font-bold text-navy">INV-2057</span>
                            <p className="text-slate-600">Potential duplicate submission of INV-2049</p>
                          </div>
                        </div>
                        <span className="rounded bg-red-200/60 px-2 py-0.5 text-[10px] font-bold text-red-900">
                          DUPLICATE
                        </span>
                      </li>

                      <li className="flex items-center justify-between rounded-xl bg-emerald-50/70 border border-emerald-200/60 p-3">
                        <div className="flex items-center gap-2.5">
                          <span className="size-2.5 rounded-2xl bg-emerald-500 shrink-0" />
                          <div>
                            <span className="font-mono font-bold text-navy">246 Vouchers</span>
                            <p className="text-slate-600">3-Way matched, zero variance against PO &amp; GRN</p>
                          </div>
                        </div>
                        <span className="rounded bg-emerald-200/60 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                          TIED OUT
                        </span>
                      </li>
                    </ul>


                    {/* Sign-off Handshake Bar */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <IconShield className="size-4 text-brand" />
                        <span className="text-xs font-medium text-slate-500">Partner Sign-off Authority:</span>
                      </div>
                      <span className="rounded-2xl bg-navy px-4 py-1.5 text-xs font-bold text-white shadow-xs">
                        Human Auditor
                      </span>
                    </div>
                  </div>

                  {/* ================= BACK FACE: Backward Side with Quote & Reflection ================= */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-3xl bg-gradient-to-br from-[#090e24] via-[#0d1637] to-[#050816] p-6 sm:p-7 text-white shadow-2xl shadow-navy/60 border border-teal/40 flex flex-col justify-between overflow-hidden">
                    {/* Holographic specular light reflection sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/12 via-transparent to-white/5 pointer-events-none" />
                    <div className="absolute -top-20 -right-20 size-48 rounded-2xl bg-leaf/20 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 size-48 rounded-2xl bg-violet/30 blur-3xl pointer-events-none" />

                    {/* Back Header */}
                    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3.5">
                      <div className="flex items-center gap-2.5">

                        <div>
                          <p className="font-display text-xs font-bold uppercase tracking-wider text-leaf">
                            The Endloops Mission
                          </p>
                          <p className="text-[10px] text-slate-400">Human-in-the-Loop Philosophy</p>
                        </div>
                      </div>

                    </div>

                    {/* Quote Body */}
                    <div className="relative z-10 my-auto py-2">
                      <div className="mb-2">
                        <IconQuote className="size-7 sm:size-8 text-leaf/35" />
                      </div>
                      <blockquote className="font-display text-[15px] sm:text-base lg:text-[17px] font-medium leading-relaxed tracking-tight text-slate-100">
                        “Endloops automates the repetitive heavy lifting of{' '}
                        <span className="text-leaf font-bold underline decoration-leaf/50 decoration-2 underline-offset-4">
                          accounting, audit, and property finance
                        </span>
                        . Zero manual data entry, zero guesswork-so your team focuses on{' '}
                        <span className="text-white font-bold underline decoration-teal/60 decoration-2 underline-offset-4">
                          judgement, strategy, and clients
                        </span>
                        .”
                      </blockquote>
                    </div>

                    {/* Back Footer */}
                    <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3.5">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-leaf">
                        <IconCheckCircle className="size-3.5" />
                        <span>100% Deterministic</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ground Mirror Reflection Under the Card */}
                <div className="reflection-floor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 5-STEP LOOP: HOW ENDLOOPS WORKS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 !mt-6 sm:!mt-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-leaf/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span>The Human-in-the-Loop Architecture</span>
          </div>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Every process follows one rigorous loop.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From raw messy invoices to signed audit opinions, Endloops executes the manual grunt work, but leaves the professional judgement, risk evaluation, and final signature where it belongs: with you.
          </p>
        </div>

        {/* Vertical Stepper & Active Detail Layout */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: 5 Vertical Steps (5 cols) */}
          <div className="lg:col-span-5 space-y-3 relative">
            {/* Subtle background vertical timeline track */}
            <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-slate-200 pointer-events-none hidden sm:block" />

            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowIndex === idx
              const isCompleted = idx < activeWorkflowIndex

              return (
                <button
                  key={step.title}
                  onClick={() => handleSelectStep(idx)}
                  className={`relative z-10 w-full overflow-hidden flex flex-col rounded-2xl p-4 sm:p-4.5 text-left transition-all duration-300  border cursor-pointer ${isActive
                    ? 'border-brand bg-white shadow-xl shadow-brand/10 ring-2 ring-brand/25 sm:translate-x-1.5'
                    : 'border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                    }`}
                  title={`Click to inspect Step ${step.step}: ${step.title}`}
                >
                  {/* Vertical Progress Bar for active step while playing */}
                  {isActive && isWorkflowPlaying && !isWorkflowHovered && (
                    <div
                      className="absolute left-0 top-0 w-1.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-r-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-75 overflow-hidden"
                      style={{ height: `${Math.min(100, workflowProgress)}%` }}
                    >
                      <div className="absolute -bottom-1 left-0 size-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                    </div>
                  )}
                  {isActive && (!isWorkflowPlaying || isWorkflowHovered) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-r-full shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  )}

                  <div className="flex items-center gap-3.5">
                    {/* Step Number Circle */}
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 duration-200 ${isActive
                        ? 'bg-brand text-white shadow-md shadow-brand/30 ring-2 ring-brand/20'
                        : isCompleted
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-white border border-slate-200 text-slate-600'
                        }`}
                    >
                      {isCompleted ? (
                        <IconCheck className="size-4 text-emerald-700 stroke-[3]" />
                      ) : (
                        <span>{step.step}</span>
                      )}
                    </div>

                    {/* Step Title, Action & Phase */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-display text-base font-extrabold tracking-tight transition-colors ${isActive ? 'text-navy' : 'text-slate-800'
                            }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-2xl transition-colors ${isActive
                            ? 'bg-brand/10 text-brand font-bold'
                            : 'text-slate-400 bg-slate-100'
                            }`}
                        >
                          Phase {step.step}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 truncate font-normal">
                        {step.action}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Step Deep-Dive Card (7 cols) */}
          <div
            key={activeWorkflowIndex}
            onMouseEnter={() => setIsWorkflowHovered(true)}
            onMouseLeave={() => setIsWorkflowHovered(false)}
            className="lg:col-span-7 animate-page-enter rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xl shadow-navy/5 flex flex-col justify-between"
          >
            <div className="space-y-5">
              {/* Tag & Phase badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block rounded-2xl bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold  tracking-wider">
                    {workflowSteps[activeWorkflowIndex].tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    Step {activeWorkflowIndex + 1} of {workflowSteps.length}
                  </span>
                </div>
              </div>

              {/* Step Title & Action */}
              <div>
                <h3 className=" text-2xl  font-extrabold text-navy tracking-tight">
                  Step {workflowSteps[activeWorkflowIndex].step}: {workflowSteps[activeWorkflowIndex].title} – {workflowSteps[activeWorkflowIndex].action}
                </h3>
                <p className="mt-2  text-slate-600 ">
                  {workflowSteps[activeWorkflowIndex].description}
                </p>
              </div>

              {/* The Professional's Role Callout */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  The Professional&apos;s Role
                </span>
                <p className="text-sm font-semibold text-navy">
                  {workflowSteps[activeWorkflowIndex].auditorRole}
                </p>
              </div>

              {/* Simulated Terminal / Output Box */}
              <div className="rounded-2xl bg-navy p-5 sm:p-6 text-slate-200 font-mono text-xs sm:text-sm shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-2xl bg-red-500/80" />
                    <span className="size-3 rounded-2xl bg-amber-500/80" />
                    <span className="size-3 rounded-2xl bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-400">Endloops Output Stream</span>
                </div>
                <p className="text-emerald-400 font-bold mb-2 text-xs">
                  &gt; Status: Completed with 100% deterministic rule trace
                </p>
                <div className="rounded-xl bg-black/40 p-3.5 sm:p-4 border border-white/5 leading-relaxed text-slate-300 text-xs sm:text-sm">
                  {workflowSteps[activeWorkflowIndex].sampleOutput}
                </div>
                <div className="mt-3.5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Rule Engine v4.2</span>
                  <span className="text-emerald-400 font-semibold">Audit Ready</span>
                </div>
              </div>
            </div>

            {/* Card Footer Navigation & Loop Controls */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevStep}
                  className="font-bold text-slate-700 hover:text-brand transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <IconArrowLeft className="size-3.5" />
                  <span>Previous</span>
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={handleNextStep}
                  className="font-bold text-slate-700 hover:text-brand transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next step</span>
                  <IconArrowRight className="size-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* DUAL OFFERINGS SECTION: SOLUTIONS VS STANDALONE TOOLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-royal/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-royal">
              <IconLayers className="size-3.5" />
              <span>Two Product Modalities</span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              What we build
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Whether you need an entire statutory process run end-to-end or a laser-focused standalone tool to solve a specific bottleneck.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveOfferingTab('solutions')}
              className={`rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${activeOfferingTab === 'solutions'
                ? 'bg-navy text-white shadow-sm'
                : 'text-slate-600 hover:text-navy'
                }`}
            >
              1. End-to-End Solutions ({solutionsData.length})
            </button>
            <button
              onClick={() => setActiveOfferingTab('tools')}
              className={`rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${activeOfferingTab === 'tools'
                ? 'bg-navy text-white shadow-sm'
                : 'text-slate-600 hover:text-navy'
                }`}
            >
              2. Standalone Tools ({toolsData.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Solutions Grid */}
        {activeOfferingTab === 'solutions' && (
          <div className="mt-10">
            <div className="mb-6 rounded-2xl bg-brand/5 border border-brand/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-extrabold text-navy">
                  Complete End-to-End Software
                </h3>
                <p className="text-sm text-slate-600">
                  Comprehensive systems that run an entire financial service or audit engagement from intake to final sign-off.
                </p>
              </div>
              <button
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors shrink-0"
              >
                <span>View deep-dive solutions page</span>
                <IconArrowRight className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutionsData.map((item) => (
                <div
                  key={item.id}
                  className="hover-lift flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand/40 transition-all duration-300 duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-2xl bg-brand/10 px-3 py-1 text-[11px] font-bold text-brand">
                        {item.status}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">End-to-End</span>
                    </div>

                    <h4 className="font-display text-xl font-extrabold text-navy">{item.name}</h4>
                    <p className="mt-2 text-xs font-medium text-brand-dark">{item.tagline}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.description}</p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {item.keyFeatures.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <IconCheck className="size-3.5 text-brand shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="inline text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-relaxed">
                        {item.timeSaved}
                      </span>
                    </div>
                    <button
                      onClick={() => onNavigate('solutions')}
                      className="text-xs font-bold text-navy hover:text-brand transition-colors inline-flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span>Explore</span>
                      <IconArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Standalone Tools Grid */}
        {activeOfferingTab === 'tools' && (
          <div className="mt-10">
            <div className="mb-6 rounded-2xl bg-royal/5 border border-royal/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-extrabold text-navy">
                  Laser-Focused Standalone Tools
                </h3>
                <p className="text-sm text-slate-600">
                  Targeted tools that solve one specific financial friction point. Use them individually without altering your existing ERP or workflow.
                </p>
              </div>
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:text-royal-dark transition-colors shrink-0"
              >
                <span>View all standalone tools</span>
                <IconArrowRight className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {toolsData.map((tool) => (
                <div
                  key={tool.id}
                  className="hover-lift flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-royal/40 transition-all duration-300 duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-2xl bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                        {tool.category}
                      </span>
                      <span className="rounded-2xl bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                        {tool.status}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-extrabold text-navy">{tool.name}</h4>
                    <p className="mt-1.5 text-xs font-medium text-slate-700">{tool.tagline}</p>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{tool.description}</p>

                    <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                      <span className="font-semibold text-navy block text-[11px] uppercase tracking-wider mb-1">
                        Impact Metric:
                      </span>
                      <span className="font-medium text-royal-dark">{tool.highlightStat}</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {tool.typicalVolume}
                    </span>
                    <button
                      onClick={() => onNavigate('tools')}
                      className="text-xs font-bold text-navy hover:text-royal transition-colors inline-flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <IconArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* INTERACTIVE VISUALIZER SHOWCASE (The Core Visual Extra) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-brand/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">

            <span>Interactive Visual Experience</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            See how an Endloops tool works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Test the live vouching and 3-way matching engine directly in your browser. Inspect extracted OCR data, view deterministic rule violations, and test the human sign-off workflow.
          </p>
        </div>

        {/* Live Visualizer Component */}
        <ToolVisualizer />
      </section>

      {/* CLIENT PERSONAS: WHO WE BUILD FOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-violet/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet">
            <IconUsers className="size-3.5" />
            <span>Built for Financial Practitioners</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Designed for teams where reliability is non-negotiable
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Our users are accountants, auditors, finance teams, and property management companies in the UAE and GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {personasData.map((persona, i) => (
            <div
              key={i}
              className="hover-lift flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white mb-6">
                  {i === 0 ? <IconAward className="size-6 text-leaf" /> : i === 1 ? <IconBuilding className="size-6 text-royal-light" /> : <IconLayers className="size-6 text-violet-light" />}
                </div>

                <h3 className="font-display text-xl font-extrabold text-navy">{persona.title}</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">{persona.subtitle}</p>

                <div className="mt-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Daily Frustrations We Eliminate:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {persona.challenges.map((c, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="size-1.5 rounded-2xl bg-amber-500 shrink-0 mt-1.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand block mb-1">
                    The Endloops Advantage:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {persona.endloopsSolution}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4">
                <span className="font-mono text-sm font-extrabold text-brand bg-brand/5 px-3 py-1.5 rounded-lg inline-block">
                  {persona.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI CALCULATOR SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RoiCalculator onRequestDemo={onRequestDemo} />
      </section>

      {/* TESTIMONIALS / DUBAI FINANCIAL VOICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-leaf/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <IconCheckCircle className="size-3.5" />
            <span>Voices From The Field</span>
          </div>
         <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Trusted by practitioners who stake their reputation on numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="hover-lift flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-display text-sm font-bold text-navy">{item.author}</p>
                <p className="text-xs text-slate-500">{item.title} · {item.firm}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{item.location}</span>
                  <span className="font-semibold text-brand">{item.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL HIGH IMPACT CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-white/10">
          {/* Centered Ambient Aurora Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-gradient-to-r from-brand/20 via-teal/20 to-royal/20 blur-3xl rounded-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/15 blur-3xl rounded-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/15 blur-3xl rounded-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            <h2 className="font-display mt-5 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Ready to eliminate repetitive financial grunt work?
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us which process consumes your team&apos;s time. We will show you how an Endloops solution or tool prepares it, with every final sign-off staying strictly in your hands.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-bold text-white  transition-all duration-300 hover:bg-brand-light hover:shadow-brand/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer duration-300"
              >
                <span>Request a Demo</span>
                <IconArrowRight className="size-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer duration-300"
              >
                <span>Talk to Dubai Team</span>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <IconCheck className="size-4 text-emerald-400 shrink-0" />
                <span>Free working paper assessment</span>
              </span>
              <span className="flex items-center gap-2">
                <IconCheck className="size-4 text-emerald-400 shrink-0" />
                <span>Non-Disclosure Agreement (NDA)</span>
              </span>
              <span className="flex items-center gap-2">
                <IconCheck className="size-4 text-emerald-400 shrink-0" />
                <span>Rapid 48-hour onboarding</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


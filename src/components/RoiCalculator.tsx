import { useState } from 'react'
import { IconCalculator, IconClock, IconShield, IconSparkles, IconArrowRight } from './Icons'

interface RoiCalculatorProps {
  onRequestDemo: () => void
}

export default function RoiCalculator({ onRequestDemo }: RoiCalculatorProps) {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(3000)
  const [hourlyRateAED, setHourlyRateAED] = useState<number>(140)
  const [minutesPerDoc, setMinutesPerDoc] = useState<number>(7)

  // Calculations
  const totalMinutesManual = monthlyVolume * minutesPerDoc
  const totalHoursManual = Math.round(totalMinutesManual / 60)

  // Endloops cuts repetitive verification time by ~82%
  const hoursSavedPerMonth = Math.round(totalHoursManual * 0.82)
  const hoursSavedPerYear = hoursSavedPerMonth * 12
  const annualSavingsAED = Math.round(hoursSavedPerYear * hourlyRateAED)

  // Turnaround acceleration: from ~4 days down to ~45 minutes
  const turnAroundDaysManual = Math.max(2, Math.round(totalHoursManual / 40))

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
          <IconCalculator className="size-3.5" />
          <span>Interactive Savings Estimator</span>
        </div>
         <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          Estimate your team's monthly hours &amp; cost savings
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
          See the tangible return of automating document extraction, 3-way matching, and working paper drafting in your practice.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Monthly Document Volume */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-2xs">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="volume-slider" className="text-xs font-semibold text-slate-700 tracking-tight">
                Monthly Invoices / Vouchers / Documents
              </label>
              <span className="font-mono text-xs font-bold text-brand tabular-nums bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                {monthlyVolume.toLocaleString()} docs/mo
              </span>
            </div>
            <input
              id="volume-slider"
              type="range"
              min="500"
              max="20000"
              step="250"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full accent-brand cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
              <span>500 (Boutique)</span>
              <span>10,000 (Mid-Size)</span>
              <span>20,000+ (Enterprise)</span>
            </div>
          </div>

          {/* Slider 2: Current Manual Time per Doc */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-2xs">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="time-slider" className="text-xs font-semibold text-slate-700 tracking-tight">
                Average Manual Extraction &amp; Matching Time
              </label>
              <span className="font-mono text-xs font-bold text-teal tabular-nums bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md">
                {minutesPerDoc} mins / doc
              </span>
            </div>
            <input
              id="time-slider"
              type="range"
              min="3"
              max="15"
              step="1"
              value={minutesPerDoc}
              onChange={(e) => setMinutesPerDoc(Number(e.target.value))}
              className="w-full accent-teal cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
              <span>3 mins (Simple)</span>
              <span>7 mins (Standard)</span>
              <span>15 mins (Complex Line Items)</span>
            </div>
          </div>

          {/* Slider 3: Hourly Rate in AED */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-2xs">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="rate-slider" className="text-xs font-semibold text-slate-700 tracking-tight">
                Blended Accountant / Auditor Hourly Rate
              </label>
              <span className="font-mono text-xs font-bold text-royal tabular-nums bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md">
                AED {hourlyRateAED} / hour
              </span>
            </div>
            <input
              id="rate-slider"
              type="range"
              min="80"
              max="350"
              step="10"
              value={hourlyRateAED}
              onChange={(e) => setHourlyRateAED(Number(e.target.value))}
              className="w-full accent-royal cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
              <span>AED 80 (Junior)</span>
              <span>AED 150 (Senior Auditor)</span>
              <span>AED 350 (Manager / Partner)</span>
            </div>
          </div>
        </div>

        {/* Results Highlight Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-navy p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-16 -right-16 size-48 rounded-2xl bg-brand/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 size-48 rounded-2xl bg-royal/20 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
              Estimated Value Delivered
            </span>

            {/* Annual Savings in AED */}
            <div className="mt-4 border-b border-white/10 pb-5">
              <span className="text-xs text-slate-400 uppercase font-semibold">Annualized Financial Savings</span>
              <div key={annualSavingsAED} className="font-display mt-1 text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight animate-page-enter">
                AED {annualSavingsAED.toLocaleString()}
              </div>
              <span className="text-xs text-emerald-300 font-medium mt-1 inline-block">
                Based on recovered billable capacity and automated verification
              </span>
            </div>

            {/* Key Metrics Grid */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-3.5 border border-white/10 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <IconClock className="size-4 text-emerald-400" />
                  <span>Hours Saved</span>
                </div>
                <div key={hoursSavedPerMonth} className="font-display mt-1 text-2xl font-bold text-white tabular-nums animate-page-enter">
                  {hoursSavedPerMonth} hrs
                </div>
                <span className="text-[10px] text-slate-400">every single month</span>
              </div>

              <div className="rounded-xl bg-white/5 p-3.5 border border-white/10 transition-transform duration-200 hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  
                  <span>Cycle Speedup</span>
                </div>
                <div className="font-display mt-1 text-2xl font-bold text-white tabular-nums">
                  {turnAroundDaysManual}d → 45m
                </div>
                <span className="text-[10px] text-slate-400">batch turnaround</span>
              </div>
            </div>

            {/* Quality & Trust Note */}
            <div className="mt-5 flex items-start gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
              <IconShield className="size-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                99.8% elimination of manual transcription errors while your senior team retains final review sign-off.
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={onRequestDemo}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-light hover:shadow-brand/50"
            >
              <span>Validate ROI with Your Firm's Data</span>
              <IconArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


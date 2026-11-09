import { useState } from 'react'
import { simulationCases } from '../data'
import {
  IconCheck,
  IconCheckCircle,
  IconAlertTriangle,
  IconAlertCircle,
  IconShield,
  IconFileText,
  IconLayers,
  IconDownload,
  IconRefreshCw,
  IconSparkles,
  IconCopy,
  IconPercent,
} from './Icons'

export default function ToolVisualizer() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-2')
  const [activeTab, setActiveTab] = useState<'document' | 'ledger' | 'rules'>('document')
  const [decisionState, setDecisionState] = useState<Record<string, 'approved' | 'queried' | null>>({})
  const [isScanning, setIsScanning] = useState<boolean>(false)

  const currentCase = simulationCases.find((c) => c.id === selectedCaseId) || simulationCases[0]
  const currentDecision = decisionState[currentCase.id] || null

  const handleSelectCase = (id: string) => {
    setIsScanning(true)
    setSelectedCaseId(id)
    setTimeout(() => {
      setIsScanning(false)
    }, 700)
  }

  const handleDecision = (action: 'approved' | 'queried') => {
    setDecisionState((prev) => ({
      ...prev,
      [currentCase.id]: action,
    }))
  }

  const handleResetDecision = () => {
    setDecisionState((prev) => ({
      ...prev,
      [currentCase.id]: null,
    }))
  }

  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-navy/5 sm:p-8 overflow-hidden transition-all duration-300">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 size-96 rounded-2xl bg-gradient-to-bl from-brand/5 via-teal/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header with Case Selector */}
      <div className="relative z-10 flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-brand/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand shadow-xs">
            <span>Interactive Engine Simulator</span>
          </div>
          <h3 className="font-display mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
            Live Vouching &amp; 3-Way Reconciliation
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Select an intake batch below to watch how Endloops extracts data, executes deterministic tests, and stages review.
          </p>
        </div>

        {/* Case Switcher Pills */}
        <div className="flex flex-wrap gap-2.5">
          {simulationCases.map((c) => {
            const isSelected = c.id === currentCase.id
            return (
              <button
                key={c.id}
                onClick={() => handleSelectCase(c.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${isSelected
                  ? 'bg-navy text-white shadow-md ring-2 ring-brand/50'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-navy border border-slate-200/70'
                  }`}
              >
                {c.title === 'Clean 3-Way Match' && (
                  <span
                    className={`flex size-5 items-center justify-center rounded-md transition-colors ${isSelected ? 'bg-emerald-500/25 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                      }`}
                  >
                    <IconCheckCircle className="size-3.5" />
                  </span>
                )}
                {c.title === 'Price Mismatch Exception' && (
                  <span
                    className={`flex size-5 items-center justify-center rounded-md transition-colors ${isSelected ? 'bg-amber-500/25 text-amber-400' : 'bg-amber-100 text-amber-700'
                      }`}
                  >
                    <IconAlertTriangle className="size-3.5" />
                  </span>
                )}
                {c.title === 'Potential Duplicate Invoice' && (
                  <span
                    className={`flex size-5 items-center justify-center rounded-md transition-colors ${isSelected ? 'bg-red-500/25 text-red-400' : 'bg-red-100 text-red-700'
                      }`}
                  >
                    <IconCopy className="size-3.5" />
                  </span>
                )}
                {c.title === 'VAT Calculation Rounding Error' && (
                  <span
                    className={`flex size-5 items-center justify-center rounded-md transition-colors ${isSelected ? 'bg-amber-500/25 text-amber-400' : 'bg-amber-100 text-amber-700'
                      }`}
                  >
                    <IconPercent className="size-3.5" />
                  </span>
                )}
                <span>{c.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Document View / Extraction Inspector (5 cols) */}
        <div className="lg:col-span-5 flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <IconFileText className="size-4 text-brand" />
              <span>Simulated Ingestion Source</span>
            </div>
            <span className="rounded-md bg-white border border-slate-200 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 shadow-2xs">
              {currentCase.invoiceNumber}.pdf
            </span>
          </div>

          {/* Simulated Physical Document with OCR Highlighting */}
          <div className="relative mt-4 flex-1 overflow-hidden rounded-xl border border-slate-300/80 bg-white p-5 font-mono shadow-inner text-xs text-slate-800 transition-all duration-300">
            {/* Glowing Laser Scan Bar */}
            <div className="animate-laser-scan" />

            {/* High-Tech HUD Scan Header */}
            <div className="mb-3 flex items-center justify-between border-b border-dashed border-slate-200 pb-2 text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 font-sans font-semibold text-brand">
  
                OCR Laser Stream: 300 DPI
              </span>
              <span className="font-mono">Confidence: {currentCase.confidenceScore}%</span>
            </div>

            {/* Document Header */}
            <div className="flex justify-between items-start border-b border-dashed border-slate-200 pb-3">
              <div>
                <p className="font-bold text-navy text-sm font-sans">{currentCase.supplier}</p>
                <p className="text-[10px] text-slate-500">TRN: 100294819200003 · Dubai, UAE</p>
                <p className="text-[10px] text-slate-500">Date: {currentCase.invoiceDate}</p>
              </div>
              <div className="text-right">
                <span className="rounded bg-navy/5 px-2 py-1 text-[11px] font-bold text-navy">
                  TAX INVOICE
                </span>
                <p className="mt-1 text-[11px] font-bold text-brand">{currentCase.invoiceNumber}</p>
              </div>
            </div>

            {/* Bill To & PO Ref */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] border-b border-slate-100 pb-3">
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Billed To</span>
                <span className="font-sans font-semibold text-slate-700">Alkazim Property Asset Co.</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Purchase Order Ref</span>
                <span className="font-bold text-navy bg-amber-50 px-1 py-0.5 rounded border border-amber-200/60 inline-block">
                  {currentCase.poNumber}
                </span>
              </div>
            </div>

            {/* Extraction Tag Bounding Boxes */}
            <div className="mt-4 space-y-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400 block">
                OCR Bounding Box Extractions:
              </span>

              <div className="rounded-lg border border-emerald-300 bg-emerald-50/70 p-2.5 transition-all duration-300 duration-300 hover:shadow-sm">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-600 font-sans">Goods Subtotal (Excl. VAT):</span>
                  <span className="font-bold tabular-nums text-navy">
                    AED {(currentCase.invoiceTotalAED - currentCase.vatAmountAED).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-emerald-800">
                  <span className="flex items-center gap-1 font-sans">
                    <IconCheck className="size-3 text-emerald-600" /> Bounding box: [x:42, y:180]
                  </span>
                  <span className="font-bold font-mono">Conf: {currentCase.confidenceScore}%</span>
                </div>
              </div>

              <div className="rounded-lg border border-emerald-300 bg-emerald-50/70 p-2.5 transition-all duration-300 duration-300 hover:shadow-sm">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-600 font-sans">UAE FTA VAT (Standard 5.0%):</span>
                  <span className="font-bold tabular-nums text-navy">
                    AED {currentCase.vatAmountAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-emerald-800">
                  <span className="flex items-center gap-1 font-sans">
                    <IconCheck className="size-3 text-emerald-600" /> Verified tax rate parameter
                  </span>
                  <span className="font-bold font-mono">Conf: 99.8%</span>
                </div>
              </div>

              <div
                className={`rounded-lg border p-2.5 transition-all duration-300 duration-300 hover:shadow-sm ${currentCase.status === 'Matched'
                  ? 'border-emerald-300 bg-emerald-50/70'
                  : 'border-amber-400 bg-amber-50/80'
                  }`}
              >
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-slate-700 font-sans">Gross Billed Total:</span>
                  <span className="font-bold tabular-nums text-navy text-sm font-mono">
                    AED {currentCase.invoiceTotalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {currentCase.status !== 'Matched' && (
                  <div className="mt-1 flex items-center gap-1 font-sans text-[10px] font-bold text-amber-800">
                    <IconAlertTriangle className="size-3 text-amber-600 shrink-0" />
                    <span>Variance against PO #{currentCase.poNumber} detected</span>
                  </div>
                )}
              </div>
            </div>

            {/* Document Footer Stamp */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <span>Electronic Capture Engine v4.2</span>
              <span>100% In-Country UAE Processed</span>
            </div>
          </div>
        </div>

        {/* Right: Verification Engine & Auditor Sign-off (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div>
            {/* View Tab Selector */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('document')}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${activeTab === 'document' ? 'bg-navy text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  3-Way Cross Check
                </button>
                <button
                  onClick={() => setActiveTab('rules')}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${activeTab === 'rules' ? 'bg-navy text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  Rules Evaluated (12/12)
                </button>
              </div>

              {/* Status Badge */}
              <div
                className={`inline-flex items-center gap-1.5 rounded-2xl px-3.5 py-1 text-xs font-bold transition-all duration-300 duration-300 ${currentCase.status === 'Matched'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs'
                  : currentCase.status === 'Duplicate Alert'
                    ? 'bg-red-100 text-red-800 border border-red-300 shadow-xs'
                    : 'bg-amber-100 text-amber-800 border border-amber-300 shadow-xs'
                  }`}
              >
                {currentCase.status === 'Matched' ? (
                  <IconCheckCircle className="size-3.5" />
                ) : currentCase.status === 'Duplicate Alert' ? (
                  <IconCopy className="size-3.5" />
                ) : currentCase.title.includes('VAT') ? (
                  <IconPercent className="size-3.5" />
                ) : (
                  <IconAlertTriangle className="size-3.5" />
                )}
                <span>{currentCase.status}</span>
              </div>
            </div>

            {/* Tab 1: 3-Way Match Comparison Grid */}
            {activeTab === 'document' && (
              <div className="mt-5 space-y-4 animate-page-enter">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform hover:-translate-y-0.5">
                    <span className="block text-[11px] font-semibold text-slate-500 uppercase">Purchase Order</span>
                    <span className="font-mono text-xs font-bold text-slate-700 block mt-1">{currentCase.poNumber}</span>
                    <span className="font-mono text-sm font-extrabold text-navy tabular-nums block mt-1">
                      AED {currentCase.poTotalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform hover:-translate-y-0.5">
                    <span className="block text-[11px] font-semibold text-slate-500 uppercase">Supplier Invoice</span>
                    <span className="font-mono text-xs font-bold text-brand block mt-1">{currentCase.invoiceNumber}</span>
                    <span className="font-mono text-sm font-extrabold text-navy tabular-nums block mt-1">
                      AED {currentCase.invoiceTotalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform hover:-translate-y-0.5">
                    <span className="block text-[11px] font-semibold text-slate-500 uppercase">General Ledger</span>
                    <span className="font-mono text-xs font-bold text-slate-700 block mt-1">Acc: 2010-AP</span>
                    <span className="font-mono text-sm font-extrabold text-navy tabular-nums block mt-1">
                      AED {currentCase.ledgerTotalAED.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* Variance / Findings Banner */}
                <div
                  className={`rounded-xl border p-4 transition-all duration-300 duration-300 ${currentCase.status === 'Matched'
                    ? 'border-emerald-200 bg-emerald-50/80 text-emerald-900'
                    : 'border-amber-300 bg-amber-50/90 text-amber-950 shadow-xs'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    {currentCase.status === 'Matched' ? (
                      <IconCheckCircle className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : currentCase.status === 'Duplicate Alert' ? (
                      <IconCopy className="size-5 text-red-600 shrink-0 mt-0.5" />
                    ) : currentCase.title.includes('VAT') ? (
                      <IconPercent className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <IconAlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h4 className="font-bold text-sm">
                        {currentCase.status === 'Matched'
                          ? 'Zero Variances Detected - Fully Balanced'
                          : 'Automated Audit Exception Triggered'}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed opacity-90">{currentCase.reason}</p>
                      {currentCase.ruleBroken && (
                        <div className="mt-2 inline-block rounded bg-amber-200/60 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-900">
                          {currentCase.ruleBroken}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Human Responsibility Reminder */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs text-slate-600 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconShield className="size-4 text-brand" />
                    <span className="font-medium">
                      Auditor Next Step: <strong className="text-navy">{currentCase.humanActionRequired}</strong>
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase text-brand tracking-wider">
                    Human-in-the-Loop
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Detailed Rules List */}
            {activeTab === 'rules' && (
              <div className="mt-4 space-y-2.5 max-h-72 overflow-y-auto pr-1 animate-page-enter">
                {[
                  { name: 'R-101: 3-Way Quantity & Rate Match', status: currentCase.id === 'case-2' ? 'Failed' : 'Passed' },
                  { name: 'R-102: Supplier TRN Registration Validation', status: 'Passed' },
                  { name: 'R-103: Invoice Date within Accounting Period', status: 'Passed' },
                  { name: 'R-104: Variance Threshold (< 0.01% tolerance)', status: currentCase.id === 'case-2' ? 'Failed' : 'Passed' },
                  { name: 'R-202: 90-Day Rolling Duplicate Invoice Scan', status: currentCase.id === 'case-3' ? 'Failed' : 'Passed' },
                  { name: 'R-305: UAE FTA 5% VAT Calculation Exactness', status: currentCase.id === 'case-4' ? 'Failed' : 'Passed' },
                  { name: 'R-401: Delivery Note Proof Signed & Timestamped', status: 'Passed' },
                  { name: 'R-502: Chart of Accounts Allocation Check', status: 'Passed' },
                ].map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-slate-50 px-3.5 py-2 text-xs transition-colors hover:bg-white"
                  >
                    <span className="font-mono text-slate-700">{rule.name}</span>
                    <span
                      className={`inline-flex items-center gap-1 font-bold ${rule.status === 'Passed' ? 'text-emerald-700' : 'text-amber-700'
                        }`}
                    >
                      {rule.status === 'Passed' ? (
                        <IconCheck className="size-3.5" />
                      ) : (
                        <IconAlertTriangle className="size-3.5" />
                      )}
                      {rule.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Decision / Sign-off Control (The Core Philosophy in Action!) */}
          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Professional Review &amp; Decision
              </span>
              {currentDecision && (
                <button
                  onClick={handleResetDecision}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy transition-colors font-medium"
                >
                  <IconRefreshCw className="size-3" />
                  <span>Reset decision</span>
                </button>
              )}
            </div>

            {currentDecision === 'approved' ? (
              /* High-End Official Auditor Stamp Animation */
              <div className="animate-stamp rounded-2xl border-2 border-emerald-500 bg-emerald-50/90 p-5 shadow-lg shadow-emerald-500/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                      <IconCheck className="size-6 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-extrabold uppercase tracking-wide text-emerald-950">
                          AUDIT SIGN-OFF APPLIED
                        </span>
                        <span className="rounded bg-emerald-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                          VERIFIED
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-emerald-800 font-medium">
                        Authorized by Senior Auditor: Tariq Al-Hashemi · Lead Sheet Ref: WP-2041-A
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right font-mono text-[10px] text-emerald-700">
                    <span className="block font-bold">Dubai GST Timestamp</span>
                    <span>ISA 700 Compliant</span>
                  </div>
                </div>
                <div className="mt-3 border-t border-emerald-200/70 pt-2 text-[11px] text-emerald-700 flex justify-between items-center">
                  <span>Electronic audit trail permanently locked &amp; indexed to client folder.</span>
                  <span className="font-mono text-emerald-900 font-bold">HASH: 8F2A-94B1-2041</span>
                </div>
              </div>
            ) : currentDecision === 'queried' ? (
              <div className="animate-stamp rounded-2xl border-2 border-amber-500 bg-amber-50/95 p-5 shadow-lg shadow-amber-500/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
                      <IconAlertTriangle className="size-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-extrabold uppercase tracking-wide text-amber-950">
                          AUDITOR QUERY DISPATCHED
                        </span>
                        <span className="rounded bg-amber-500 px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                          DISCREPANCY MEMO
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-amber-900 font-medium">
                        Debit note request drafted and attached to working paper exception schedule.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 border-t border-amber-200/80 pt-2 text-[11px] text-amber-800 flex justify-between items-center">
                  <span>Notice sent to Accounts Payable &amp; Supplier Representative.</span>
                  <span className="font-mono text-amber-950 font-bold">FLAG REF: EXC-77492</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleDecision('approved')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand py-3.5 px-4 text-xs font-bold text-white shadow-md shadow-brand/20 transition-all duration-300 duration-200 hover:bg-brand-dark hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <IconCheck className="size-4" />
                  <span>Sign off &amp; Add to Lead Schedule</span>
                </button>
                <button
                  onClick={() => handleDecision('queried')}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-xs font-bold text-slate-700 transition-all duration-300 duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <IconAlertTriangle className="size-4 text-amber-600" />
                  <span>Flag for Auditor Query</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

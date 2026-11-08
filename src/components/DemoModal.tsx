import { useState, FormEvent, useEffect } from 'react'
import { IconX, IconCheckCircle, IconShield, IconCalendar, IconMail, IconBuilding } from './Icons'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Audit Partner / Senior Auditor',
    phone: '',
    solutionInterest: 'Both Solutions & Standalone Tools',
    volume: '1,000 – 5,000 documents/mo',
    preferredTime: 'Morning (09:00 – 12:00 GST)',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const validate = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required.'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email address.'
    }
    if (!formData.company.trim()) newErrors.company = 'Company / Firm name is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitted(true)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      company: '',
      role: 'Audit Partner / Senior Auditor',
      phone: '',
      solutionInterest: 'Both Solutions & Standalone Tools',
      volume: '1,000 – 5,000 documents/mo',
      preferredTime: 'Morning (09:00 – 12:00 GST)',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy/70 backdrop-blur-md">
      <div
        className="animate-page-enter relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-200 transition-all duration-300 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-2xl p-2 text-slate-400 hover:bg-slate-100 hover:text-navy focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label="Close modal"
        >
          <IconX className="size-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-5">
              <IconCheckCircle className="size-10" />
            </div>
            <h3 id="modal-headline" className="font-display text-2xl font-extrabold text-navy">
              Institutional Demo Requested
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-navy">{formData.name}</strong>. Our Dubai solution engineering team has received your request for <strong className="text-navy">{formData.company}</strong>.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Representative:</span>
                <span className="font-semibold text-navy">Dubai Senior Solution Architect</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Timeframe:</span>
                <span className="font-semibold text-navy">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scope:</span>
                <span className="font-semibold text-brand">{formData.solutionInterest}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              A calendar invite and brief pre-demo questionnaire will be delivered to <span className="font-mono text-navy font-semibold">{formData.email}</span> within 2 business hours (GST).
            </p>

            <button
              onClick={handleReset}
              className="mt-6 inline-flex rounded-2xl bg-navy px-8 py-3 text-sm font-bold text-white hover:bg-navy-light transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-2xl bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              <IconCalendar className="size-3.5" />
              <span>Tailored Working Session</span>
            </div>
            <h3 id="modal-headline" className="font-display mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              Request an Endloops Demo
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              See how Endloops prepares your specific financial processes with 100% human review sign-off.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Corporate Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@auditfirm.ae"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Company / Firm *
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Al-Mansoor Audit DIFC"
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.company ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                  />
                  {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Mobile / WhatsApp (Optional)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-role" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Your Role
                  </label>
                  <select
                    id="modal-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option>Audit Partner / Senior Auditor</option>
                    <option>Financial Controller / CFO</option>
                    <option>Property Finance / OA Manager</option>
                    <option>Head of Shared Services</option>
                    <option>Accountant / Finance Specialist</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-interest" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                    Product Interest
                  </label>
                  <select
                    id="modal-interest"
                    value={formData.solutionInterest}
                    onChange={(e) => setFormData({ ...formData, solutionInterest: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option>Both Solutions &amp; Standalone Tools</option>
                    <option>Escrow Audit (Dubai RERA)</option>
                    <option>Financial Audit Suite</option>
                    <option>Vouching &amp; 3-Way Matching</option>
                    <option>Purchase-Order Extraction</option>
                    <option>Property Management Budget Prep</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-volume" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                  Estimated Monthly Invoices / Transactions
                </label>
                <select
                  id="modal-volume"
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option>Under 1,000 documents/mo</option>
                  <option>1,000 – 5,000 documents/mo</option>
                  <option>5,000 – 20,000 documents/mo</option>
                  <option>20,000+ enterprise volume</option>
                </select>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-200">
                <IconShield className="size-4 text-brand shrink-0" />
                <span>Zero obligation. NDA and institutional data protection guaranteed.</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:shadow-brand/40"
              >
                Schedule Private Demonstration
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}


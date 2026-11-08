import { useState, FormEvent } from 'react'
import { PageId } from '../types'
import { faqsData } from '../data'
import {
  IconCheck,
  IconCheckCircle,
  IconShield,
  IconMapPin,
  IconMail,
  IconPhone,
  IconCalendar,
  IconChevronDown,
} from '../components/Icons'

interface ContactPageProps {
  onNavigate: (page: PageId) => void
}

interface ContactErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    region: 'United Arab Emirates (Dubai / Abu Dhabi)',
    role: 'Audit Partner / Senior Auditor',
    interest: 'Both Solutions & Standalone Tools',
    volume: '1,000 – 5,000 documents/mo',
    message: '',
  })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const validate = () => {
    const errs: ContactErrors = {}
    if (!formData.name.trim()) errs.name = 'Please provide your full name.'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address.'
    }
    if (!formData.company.trim()) errs.company = 'Please enter your organization or audit firm name.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitted(true)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="space-y-20 py-12 sm:space-y-28 sm:py-16">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase">
            <IconCalendar className="size-3.5" />
            <span>Connect with Endloops</span>
          </div>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-navy leading-[1.08]">
            See Endloops on your own financial work.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Tell us which process takes up your team&apos;s time. We will show you how an Endloops solution or tool prepares it, with the final sign-off staying strictly with you.
          </p>
        </div>
      </section>

      {/* MAIN INTERACTIVE CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: Office & Regional Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-navy">
                Dubai Headquarters
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our core engineering and financial analysis teams are located in Dubai, working in close proximity to leading DIFC audit practices and GCC property asset managers.
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <IconMapPin className="size-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block font-semibold">Office Address:</strong>
                    <span className="text-slate-600">
                      Level 14, Al Sa&apos;ada Tower, DIFC / Business Bay, Dubai, United Arab Emirates
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconMail className="size-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block font-semibold">Electronic Inquiries:</strong>
                    <a href="mailto:inquiries@endloops.ae" className="text-brand hover:underline font-mono">
                      inquiries@endloops.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconPhone className="size-5 text-royal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block font-semibold">Direct Telephone:</strong>
                    <a href="tel:+97142889400" className="text-navy hover:text-brand font-mono">
                      +971 4 288 9400 (Dubai GST)
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
                <span className="block font-semibold text-navy">Business Working Hours (GST):</span>
                <span>Sunday – Thursday: 08:30 – 17:30 GST</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-3xl border border-emerald-300 bg-emerald-50/70 p-6">
              <h3 className="font-display text-base font-bold text-emerald-950">
                Prefer a quick discussion on WhatsApp?
              </h3>
              <p className="mt-1 text-xs text-emerald-900 leading-relaxed">
                Connect directly with our Dubai Solution Specialists for quick questions or preliminary scoping.
              </p>
              <a
                href="https://wa.me/971502889400?text=Hello%20Endloops%20team,%20I%20would%20like%20to%20learn%20more%20about%20your%20financial%20automation%20tools."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition-colors"
              >
                <span>Chat on WhatsApp (+971 50 288 9400)</span>
              </a>
            </div>
          </div>

          {/* Right: Comprehensive Demo Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-navy/5">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
                    <IconCheckCircle className="size-10" />
                  </div>
                  <h3 className="font-display text-3xl font-extrabold text-navy">
                    Demo Request Received
                  </h3>
                  <p className="mt-3 text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy">{formData.name}</strong>. Our Dubai solution engineering team will review your requirements for <strong className="text-navy">{formData.company}</strong> and confirm your demonstration session.
                  </p>

                  <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-left text-xs space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Corporate Email:</span>
                      <span className="font-mono font-semibold text-navy">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Interest:</span>
                      <span className="font-semibold text-brand">{formData.interest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Document Volume:</span>
                      <span className="font-semibold text-navy">{formData.volume}</span>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-slate-500">
                    A representative will contact you via email within 2 business hours (GST).
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        region: 'United Arab Emirates (Dubai / Abu Dhabi)',
                        role: 'Audit Partner / Senior Auditor',
                        interest: 'Both Solutions & Standalone Tools',
                        volume: '1,000 – 5,000 documents/mo',
                        message: '',
                      })
                    }}
                    className="mt-6 inline-flex rounded-2xl bg-navy px-6 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-navy">
                      Request an Institutional Demonstration
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      No generic sales pitch-see the exact software running on representative audit and financial data.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Hashemi"
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                          }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Corporate Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@auditpractice.ae"
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                          }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Company or Audit Firm Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Al-Hashemi & Associates"
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand ${errors.company ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                          }`}
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Contact Number / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="region" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Country / Jurisdiction
                      </label>
                      <select
                        id="region"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option>United Arab Emirates (Dubai / Abu Dhabi)</option>
                        <option>Saudi Arabia (Riyadh / Jeddah)</option>
                        <option>Qatar</option>
                        <option>Bahrain</option>
                        <option>Kuwait</option>
                        <option>Oman</option>
                        <option>International / Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Professional Role
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option>Audit Partner / Senior Auditor</option>
                        <option>Financial Controller / CFO</option>
                        <option>Property Finance / OA Manager</option>
                        <option>Head of Shared Services</option>
                        <option>Accountant / Tax Specialist</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="interest" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Interested Offering
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option>Both Solutions &amp; Standalone Tools</option>
                        <option>End-to-End: Escrow Audit (Dubai RERA)</option>
                        <option>End-to-End: Financial Audit Suite</option>
                        <option>End-to-End: Budget Review Suite</option>
                        <option>End-to-End: Property Budget Prep</option>
                        <option>Standalone: Vouching Automation</option>
                        <option>Standalone: Purchase-Order Extraction</option>
                        <option>Standalone: Multi-Way Reconciliation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="volume" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                        Estimated Document Volume
                      </label>
                      <select
                        id="volume"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option>Under 1,000 documents/mo</option>
                        <option>1,000 – 5,000 documents/mo</option>
                        <option>5,000 – 20,000 documents/mo</option>
                        <option>20,000+ enterprise volume</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy mb-1 uppercase tracking-wider">
                      Specific Process or Friction Point (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We spend 15 hours every month 3-way matching subcontractor invoices in our ERP..."
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-200">
                    <IconShield className="size-4 text-brand shrink-0" />
                    <span>Your financial details and email are protected by institutional UAE non-disclosure standards.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:shadow-brand/40"
                  >
                    Request Institutional Walkthrough
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <span>Direct Answers</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-base font-bold text-navy hover:text-brand transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <IconChevronDown
                    className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="animate-page-enter px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}


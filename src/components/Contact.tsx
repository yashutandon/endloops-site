import { useState, type FormEvent } from 'react'

type Errors = Partial<Record<'name' | 'email' | 'company', string>>

const fieldCls = 'w-full rounded-xl border border-slate-300 px-4 py-3 text-navy focus:border-royal aria-[invalid=true]:border-red-600'

function Field({ id, label, type = 'text', autoComplete, error }: { id: string; label: string; type?: string; autoComplete?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={fieldCls} />
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const next: Errors = {}
    if (!get('name')) next.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) next.email = 'Enter a valid work email, like name@company.com.'
    if (!get('company')) next.company = 'Enter your company name.'
    setErrors(next)
    // TODO: send `data` to your backend or a form service (Formspree, Netlify Forms)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">See Endloops on your own work</h2>
          <p className="mt-4 max-w-md text-slate-300">
            Tell us which process takes up your team's time. We will show you how an Endloops solution or tool can prepare it, with the sign-off staying with you.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6 text-navy md:p-8">
          {sent ? (
            <div role="status" className="py-6 text-center">
              <span className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="font-display text-2xl font-bold">Request received</h3>
              <p className="mt-2 text-pretty text-slate-600">Thank you. We will be in touch to arrange your demo.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <Field id="name" label="Full name" autoComplete="name" error={errors.name} />
              <Field id="email" label="Work email" type="email" autoComplete="email" error={errors.email} />
              <Field id="company" label="Company" autoComplete="organization" error={errors.company} />
              <div>
                <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold">I am interested in</label>
                <select id="interest" name="interest" className={fieldCls}>
                  <option>End-to-end solutions</option>
                  <option>Standalone tools</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-md shadow-brand/20 transition-all duration-300 hover:bg-teal hover:shadow-brand/30">
                Request a demo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

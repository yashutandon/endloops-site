import { useState, type KeyboardEvent } from 'react'
import { endToEnd, tools } from '../data'

const tabs = [
  { label: 'End-to-end solutions', lead: 'A whole process, run from start to finish.', note: 'Choose these when you want a complete financial service handled in one connected system.', items: endToEnd },
  { label: 'Standalone tools', lead: 'One job, done well.', note: 'Choose these when you have one specific need. Every tool works on its own.', items: tools },
]

export default function Offerings() {
  const [active, setActive] = useState(0)
  const t = tabs[active]

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = 1 - active
    setActive(next)
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <section id="offerings" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Two ways to work with Endloops</h2>
      <p className="mt-4 max-w-2xl text-slate-600">
        Choose a complete solution or a focused tool. Some are already in use, others are in development, and the range keeps growing.
      </p>

      <div role="tablist" aria-label="Product types" onKeyDown={onKey} className="mt-8 inline-flex rounded-2xl bg-mist p-1 ring-1 ring-slate-200">
        {tabs.map((x, i) => (
          <button
            key={x.label}
            id={`tab-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="offer-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-2xl px-5 py-2.5 text-sm font-semibold ${active === i ? 'bg-navy text-white' : 'text-slate-600 hover:text-navy'}`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div id="offer-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-8">
        <p className="font-display text-2xl font-bold">{t.lead}</p>
        <p className="mt-1 max-w-2xl text-slate-600">{t.note}</p>

        {active === 0 ? (
          <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {t.items.map((it) => (
              <li key={it.name} className="grid gap-1 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
                <h3 className="font-display text-lg font-bold text-brand">{it.name}</h3>
                <p className="text-slate-600">{it.blurb}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.items.map((it) => (
              <li key={it.name} className="rounded-2xl border border-slate-200/80 bg-mist p-5 transition-colors hover:border-slate-300">
                <h3 className="font-display font-bold text-navy">{it.name}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{it.blurb}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

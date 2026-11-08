import { useState, type KeyboardEvent } from 'react'
import { steps } from '../data'

export default function Process() {
  const [i, setI] = useState(0)
  const s = steps[i]

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      const next = (i + 1) % steps.length
      setI(next)
      document.getElementById(`step-${next}`)?.focus()
    } else if (e.key === 'ArrowLeft') {
      const prev = (i - 1 + steps.length) % steps.length
      setI(prev)
      document.getElementById(`step-${prev}`)?.focus()
    }
  }

  return (
    <section id="process" className="scroll-mt-16 bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">How an Endloops tool works</h2>
        <p className="mt-4 max-w-2xl text-pretty text-slate-600">
          Every product follows the same loop, and the loop always ends with a person. Pick a step to see an example.
        </p>

        <div role="tablist" aria-label="Workflow steps" onKeyDown={onKey} className="mt-10 grid grid-cols-5 gap-2 md:gap-4">
          {steps.map((x, n) => {
            const on = n <= i
            const color = n === steps.length - 1 ? 'bg-violet' : 'bg-brand'
            return (
              <button
                key={x.title}
                id={`step-${n}`}
                role="tab"
                aria-selected={i === n}
                aria-controls="step-panel"
                tabIndex={i === n ? 0 : -1}
                onClick={() => setI(n)}
                className="flex flex-col items-center gap-2 rounded-xl p-2 text-sm font-semibold transition-transform focus-visible:outline-offset-2"
              >
                <span className={`grid size-10 place-items-center rounded-2xl transition-colors md:size-12 ${on ? `${color} text-white` : 'bg-white text-slate-600 ring-1 ring-slate-300'}`}>
                  {n + 1}
                </span>
                {x.title}
              </button>
            )
          })}
        </div>

        <div id="step-panel" role="tabpanel" aria-labelledby={`step-${i}`} className="mt-8 grid gap-6 rounded-3xl bg-white p-6 shadow-xl shadow-teal/10 ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="font-display text-3xl font-extrabold">{s.title}</h3>
            <p className="mt-3 text-pretty text-slate-600">{s.text}</p>
          </div>
          <div className="self-center rounded-2xl bg-navy p-6 leading-relaxed text-emerald-200">
            <p className="mb-2 text-sm text-slate-300">Example</p>
            <p className="font-mono text-sm leading-relaxed sm:text-base tabular-nums">{s.demo}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

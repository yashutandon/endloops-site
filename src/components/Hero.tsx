const rows = [
  ['INV-2041', 'Total does not match the ledger', true],
  ['INV-2057', 'Possible duplicate of INV-2049', true],
  ['246 invoices', 'Matched, no issues found', false],
] as const

function ReviewCard() {
  return (
    <div
      role="img"
      aria-label="Illustration of a review screen: 248 invoices processed, 2 flagged for a person to review"
      className="rise rounded-3xl bg-white p-6 shadow-2xl shadow-teal/15 ring-1 ring-slate-200 [animation-delay:180ms]"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-display font-bold">Vouching batch, 248 documents</p>
        <span className="rounded-2xl bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">Ready for review</span>
      </div>
      <div className="mt-4 h-2 rounded-2xl bg-slate-100 overflow-hidden">
        <div className="h-2 w-full rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 shadow-xs shadow-emerald-500/25" />
      </div>
      <ul className="mt-5 space-y-2.5">
        {rows.map(([id, msg, flag]) => (
          <li key={id} className="flex items-center gap-3 rounded-lg bg-mist px-3 py-2.5 text-sm">
            <span className={`size-2.5 shrink-0 rounded-2xl ${flag ? 'bg-amber-500' : 'bg-leaf'}`} />
            <span className="font-semibold tabular-nums">{id}</span>
            <span className="text-slate-600">{msg}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
        <span className="text-slate-600">Final sign-off</span>
        <span className="rounded-2xl bg-navy px-4 py-1.5 font-semibold text-white">You</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="bg-linear-to-b from-mist to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="rise">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            The software prepares the work. You make the call.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Endloops automates the repetitive side of accounting, audit and property finance, so your team can spend its time on judgement and clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-teal hover:shadow-brand/30">
              Request a demo
            </a>
            <a href="#offerings" className="rounded-2xl px-6 py-3 font-semibold ring-1 ring-slate-300 transition-colors hover:bg-white hover:ring-slate-400">
              See our products
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Built by the technology team at Alkazim, an accounting and audit firm in Dubai.
          </p>
        </div>
        <ReviewCard />
      </div>
    </section>
  )
}

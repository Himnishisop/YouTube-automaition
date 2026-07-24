import { useState } from "react";
import { SCRIPTS, waLink } from "../lib/site";
import { SectionHead } from "./Section";

export default function Work() {
  const [active, setActive] = useState(0);
  const s = SCRIPTS[active];

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[46rem] -translate-x-1/2 bg-violetk/12 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="Before / After"
          title={
            <>
              Same product. <span className="stroke-text">Different words.</span>
              <br />
              Completely different money.
            </>
          }
          sub="Here's the exact difference between a line that gets scrolled past and a line that gets bought. Tap through the examples."
        />

        <div className="reveal mt-12 flex flex-wrap gap-3">
          {SCRIPTS.map((x, i) => (
            <button
              key={x.niche}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                active === i
                  ? "border-lime bg-lime text-ink shadow-[0_0_28px_-8px_rgba(215,255,62,0.8)]"
                  : "border-white/15 text-bone/60 hover:border-white/40 hover:text-bone"
              }`}
            >
              {x.niche}
            </button>
          ))}
        </div>

        <div key={active} className="reveal in mt-8 grid gap-5 lg:grid-cols-2">
          <div className="animate-[tickerUp_0.5s_ease-out_both] rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-500/15 text-red-400">
                ✕
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-bone/40">
                What most people write
              </span>
            </div>
            <p className="font-display text-2xl leading-snug text-bone/35 line-through decoration-red-500/40 decoration-2">
              "{s.weak}"
            </p>
            <p className="mt-6 text-sm text-bone/35">
              Feature-first, zero tension, no reason to keep watching past second two.
            </p>
          </div>

          <div className="animate-[tickerUp_0.5s_ease-out_0.1s_both] relative overflow-hidden rounded-3xl border border-lime/35 bg-gradient-to-br from-lime/12 via-transparent to-violetk/10 p-7 sm:p-9">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/20 blur-3xl" />
            <div className="relative mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-lime/20 text-lime">
                  ✓
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-lime">
                  What I write
                </span>
              </div>
              <span className="rounded-full bg-ink/60 px-3 py-1 font-display text-sm font-bold text-lime">
                {s.metric}
              </span>
            </div>
            <p className="relative font-display text-2xl leading-snug text-bone">"{s.strong}"</p>
            <p className="relative mt-6 text-sm text-lime/70">↳ {s.note}</p>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center">
          <p className="max-w-lg text-lg text-bone/70">
            Want your current ad rewritten like this? Send it over — I'll tell you exactly why it's
            leaking money.
          </p>
          <a
            href={waLink("Hi Karan! Here's my current ad — can you tell me what's wrong with the hook?")}
            target="_blank"
            rel="noreferrer"
            className="animate-shake shrink-0 rounded-full bg-lime px-7 py-3.5 font-display font-bold text-ink"
          >
            Get a free hook teardown →
          </a>
        </div>
      </div>
    </section>
  );
}

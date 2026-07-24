import { SERVICES } from "../lib/site";
import { SectionHead } from "./Section";

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="What I write"
          title={
            <>
              Six weapons for your <span className="text-lime">ad account.</span>
            </>
          }
          sub="Every deliverable is built to be tested. No fluff docs, no 'brand storytelling' that never gets measured."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.tag}
              className="reveal tilt-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 hover:border-white/25 hover:bg-white/[0.05]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${s.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex items-start justify-between">
                <span className="text-4xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                  {s.icon}
                </span>
                <span className="font-mono text-xs text-bone/25">{s.tag}</span>
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-bone/55">{s.body}</p>
              <ul className="relative mt-6 space-y-2 border-t border-white/8 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-bone/65">
                    <span className="text-lime">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

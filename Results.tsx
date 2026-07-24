import { STATS, TESTIMONIALS } from "../lib/site";
import { useCountUp, useInView } from "../hooks/useAnim";
import { SectionHead } from "./Section";

function Stat({
  value,
  suffix,
  label,
  decimals,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  run: boolean;
}) {
  const n = useCountUp(value, run, 1700, decimals ?? 0);
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center transition-colors hover:border-lime/40">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-5xl font-bold tracking-tight text-lime sm:text-6xl">
        {decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()}
        <span className="text-flame">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-bone/50">{label}</p>
    </div>
  );
}

export default function Results() {
  const { ref, seen } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="results" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="Receipts"
          title={
            <>
              Numbers first. <span className="stroke-text">Adjectives later.</span>
            </>
          }
          align="center"
        />

        <div ref={ref} className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} run={seen} />
          ))}
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal tilt-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute right-6 top-2 font-display text-8xl leading-none text-lime/10">
                "
              </span>
              <div className="mb-4 flex gap-1 text-lime">
                {"★★★★★".split("").map((s, k) => (
                  <span key={k}>{s}</span>
                ))}
              </div>
              <blockquote className="relative text-lg leading-relaxed text-bone/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-lime to-flame font-display font-bold text-ink">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-bone/45">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

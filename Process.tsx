import { PROCESS } from "../lib/site";
import { SectionHead } from "./Section";

export default function Process() {
  return (
    <section id="process" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 bg-flame/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="The process"
          title={
            <>
              From brief to <span className="text-flame">buying</span> in five moves.
            </>
          }
          sub="No 3-week discovery phase. You brief me Monday, your editor is filming by Thursday."
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-lime via-flame to-transparent sm:block" />
          <div className="space-y-4">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="reveal group relative flex flex-col gap-5 rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:border-lime/30 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:pl-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-ink font-display text-lg font-bold text-lime transition-all duration-500 group-hover:scale-110 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                  {p.step}
                </span>
                <div className="sm:flex sm:flex-1 sm:items-baseline sm:gap-8">
                  <h3 className="font-display text-2xl font-semibold sm:w-64 sm:shrink-0">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-bone/55 sm:mt-0">{p.body}</p>
                </div>
                <span className="hidden text-2xl text-bone/15 transition-all duration-500 group-hover:translate-x-1 group-hover:text-lime lg:block">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

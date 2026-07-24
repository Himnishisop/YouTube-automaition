import { useState } from "react";
import { FAQS } from "../lib/site";
import { SectionHead } from "./Section";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            kicker="FAQ"
            title={
              <>
                Questions before <span className="text-lime">we start.</span>
              </>
            }
            sub="Anything not covered here? WhatsApp me — I answer personally, usually within minutes."
          />

          <div className="reveal divide-y divide-white/8 border-y border-white/8">
            {FAQS.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-display text-xl transition-colors sm:text-2xl ${
                        active ? "text-lime" : "text-bone group-hover:text-bone/70"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        active
                          ? "rotate-45 border-lime bg-lime text-ink"
                          : "border-white/20 text-bone/60"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 leading-relaxed text-bone/55">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

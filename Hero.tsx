import { useEffect, useState } from "react";
import { HERO_ROTATE, waLink } from "../lib/site";
import { useTypewriter } from "../hooks/useAnim";
import { WaIcon } from "./Nav";

export default function Hero() {
  const typed = useTypewriter(HERO_ROTATE);
  const [m, setM] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setM({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 sm:pt-40">
      {/* background */}
      <div className="grid-bg animate-gridmove absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_10%,#07070a_78%)]" />
      <div
        className="animate-blob absolute -left-32 top-10 h-[34rem] w-[34rem] bg-violetk/25 blur-[120px]"
        style={{ transform: `translate(${m.x * 26}px, ${m.y * 22}px)` }}
      />
      <div
        className="animate-blob absolute -right-24 top-40 h-[30rem] w-[30rem] bg-lime/20 blur-[130px]"
        style={{ animationDelay: "3s", transform: `translate(${m.x * -30}px, ${m.y * -18}px)` }}
      />
      <div className="absolute bottom-0 left-1/3 h-64 w-96 bg-flame/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* copy */}
          <div>
            <div className="reveal in mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs backdrop-blur">
              <span className="rounded-full bg-lime px-2.5 py-1 font-semibold text-ink">2026</span>
              <span className="flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime opacity-75" />
                <span className="h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="text-bone/70">Taking 3 new brands this month</span>
            </div>

            <h1 className="font-display text-[3.1rem] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.4rem]">
              <span className="block overflow-hidden">
                <span className="block animate-[tickerUp_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
                  I write ad scripts
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="stroke-text block animate-[tickerUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.12s_both]"
                  style={{ paddingBottom: "0.08em" }}
                >
                  that make people
                </span>
              </span>
              <span className="block min-h-[1.05em]">
                <span className="shine-text">{typed}</span>
                <span className="animate-caret ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.06em] bg-lime align-middle" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/60">
              KK Creations is a one-man script studio for brands, agencies and media buyers who are
              tired of pretty ads that don't sell. Hooks, UGC scripts, VSLs and angles —
              engineered around your numbers, not vibes.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="animate-shake group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-lime px-8 py-4 font-display text-base font-bold text-ink shadow-[0_0_50px_-10px_rgba(215,255,62,0.9)]"
              >
                <WaIcon className="h-5 w-5" />
                Hire Me on WhatsApp
                <span className="absolute inset-0 -translate-x-full bg-white/50 transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base text-bone/80 transition-colors hover:border-lime hover:text-lime"
              >
                See script samples
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-bone/45">
              {["48h first draft", "2 free revisions", "Editor-ready docs", "Rewrite if it flops"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="text-lime">✦</span>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* floating script card */}
          <div
            className="relative mx-auto w-full max-w-md"
            style={{
              transform: `perspective(1000px) rotateY(${m.x * 6}deg) rotateX(${-m.y * 6}deg)`,
              transition: "transform 0.25s ease-out",
            }}
          >
            <div className="animate-floaty">
              <div className="relative rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-flame" />
                  <span className="h-3 w-3 rounded-full bg-lime" />
                  <span className="h-3 w-3 rounded-full bg-violetk" />
                  <span className="ml-2 font-mono text-xs text-bone/40">
                    hook_v4_final.doc
                  </span>
                </div>

                <div className="space-y-3 font-mono text-[13px] leading-relaxed">
                  <Line label="0:00–0:03" tone="lime">
                    "Stop. If you're spending ₹1L/mo on ads and your hook is 'Hi guys' — you're
                    donating money."
                  </Line>
                  <Line label="0:03–0:08" tone="violet">
                    B-ROLL: ad manager screen, CPA climbing. Text: <b>"This is fixable."</b>
                  </Line>
                  <Line label="0:08–0:18" tone="flame">
                    PROBLEM → AGITATE. Name the exact loss. Show competitor doing it right.
                  </Line>
                  <Line label="0:18–0:25" tone="lime">
                    CTA: "Send me your offer. I'll rewrite your first 3 seconds."
                  </Line>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-ink/60 p-3 text-xs">
                  <span className="text-bone/50">Predicted hook-rate</span>
                  <span className="flex items-center gap-2 font-semibold text-lime">
                    <span className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
                      <span className="block h-full w-[86%] rounded-full bg-lime" />
                    </span>
                    86%
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-spin-slow absolute -left-10 -top-8 hidden h-24 w-24 sm:block">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text className="fill-lime text-[11px] uppercase tracking-[0.2em]">
                  <textPath href="#circ">kk creations • ad scripts • kk creations •</textPath>
                </text>
              </svg>
            </div>

            <div className="absolute -bottom-6 -right-2 rotate-6 rounded-2xl border border-white/12 bg-ink/90 px-4 py-3 backdrop-blur sm:-right-8">
              <p className="font-display text-2xl font-bold text-lime">3.4s</p>
              <p className="text-[11px] text-bone/50">avg. watch-through lift</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "lime" | "flame" | "violet";
  children: React.ReactNode;
}) {
  const color =
    tone === "lime" ? "text-lime" : tone === "flame" ? "text-flame" : "text-violetk";
  return (
    <div className="rounded-xl border border-white/8 bg-ink/40 p-3">
      <span className={`mb-1 block text-[10px] uppercase tracking-widest ${color}`}>{label}</span>
      <span className="text-bone/75">{children}</span>
    </div>
  );
}

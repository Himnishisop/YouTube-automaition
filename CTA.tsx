import { waLink, PHONE_DISPLAY, NAV } from "../lib/site";
import { WaIcon } from "./Nav";

export default function CTA() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="animate-blob absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 bg-lime/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07070a_75%)]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="reveal">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-bone/60">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              Available now
            </span>
            <h2 className="font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
              Your next winning ad
              <br />
              <span className="shine-text">starts with one message.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-bone/55">
              Tell me your product, your offer and what's not working. I'll reply with an angle you
              can test this week — free, no call needed.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="animate-shake group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-10 py-5 font-display text-lg font-bold text-white shadow-[0_0_60px_-12px_rgba(37,211,102,1)]"
              >
                <WaIcon className="h-6 w-6" />
                Hire Me on WhatsApp
                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="font-mono text-sm text-bone/45 transition-colors hover:text-lime"
              >
                or call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-bone/40">
              {["Replies in minutes", "No retainer lock-in", "NDA friendly", "Worldwide clients"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="text-lime">✓</span>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime font-display font-bold text-ink">
                  KK
                </span>
                <span className="font-display text-xl font-semibold">KK Creations</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-bone/45">
                An ad script studio for performance brands. Hooks, UGC scripts, VSLs and angles
                written to be tested — and to win.
              </p>
            </div>

            <div className="flex gap-14">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-bone/35">Explore</p>
                <ul className="space-y-2 text-sm">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="text-bone/60 transition-colors hover:text-lime">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-bone/35">Contact</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="text-bone/60 transition-colors hover:text-lime"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="font-mono text-bone/60">{PHONE_DISPLAY}</li>
                  <li className="text-bone/60">Mon–Sat · 10am–9pm IST</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden">
            <p className="stroke-text select-none whitespace-nowrap font-display text-[13vw] font-bold leading-none">
              KK CREATIONS
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-bone/35 sm:flex-row">
            <p>© {new Date().getFullYear()} KK Creations. All rights reserved.</p>
            <p>Written by a human. Tested by media buyers.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

import { waLink } from "../lib/site";

const POINTS = [
  {
    k: "I think like a media buyer",
    v: "I read the dashboard before I write the doc. Hook rate, hold rate, CTR, CPA — the script is built to move a specific metric.",
  },
  {
    k: "Research, not imagination",
    v: "Every line comes from real customer language: reviews, comments, DMs, support tickets. Nothing is invented at 2am.",
  },
  {
    k: "Editor-ready, always",
    v: "Shot-by-shot, timestamped, with on-screen text and b-roll. Your editor never messages you asking 'what does this mean?'",
  },
  {
    k: "Speed that keeps up with testing",
    v: "48-hour first drafts. Weekly iteration on winners. Your creative pipeline never goes dry.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="reveal">
            <span className="mb-4 inline-flex rounded-full border border-flame/30 bg-flame/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-flame">
              Why me
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              Most copywriters write ads.
              <br />
              <span className="text-lime">I write tests.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-bone/55">
              I'm Karan — the K and the K in KK Creations. For the last few years I've written
              scripts that get filmed, uploaded and judged by one thing only: whether the account is
              profitable the next morning. That pressure changed how I write.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Meta", "TikTok", "YouTube", "Google", "Snap"].map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-bone/60"
                >
                  {p}
                </span>
              ))}
            </div>

            <a
              href={waLink("Hi Karan! I'd like to work with KK Creations on my ad scripts.")}
              target="_blank"
              rel="noreferrer"
              className="animate-shake mt-9 inline-flex rounded-full border-2 border-lime px-7 py-3.5 font-display font-bold text-lime transition-colors hover:bg-lime hover:text-ink"
            >
              Let's talk on WhatsApp →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <div
                key={p.k}
                className="reveal tilt-card rounded-3xl border border-white/10 bg-white/[0.025] p-6 hover:border-lime/30"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono text-xs text-lime">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/55">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

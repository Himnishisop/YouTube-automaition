const ITEMS = [
  "HOOKS THAT STOP THUMBS",
  "UGC SCRIPTS",
  "VSL FRAMEWORKS",
  "ANGLE RESEARCH",
  "META ADS",
  "TIKTOK / REELS",
  "DIRECT RESPONSE",
  "HIGH ROAS COPY",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-lime py-4 text-ink">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-bold sm:text-2xl">
            {t}
            <span className="text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function LogoStrip() {
  const brands = [
    "GLOWLAB",
    "NORTHPEAK",
    "SUPPLY.IO",
    "FITHOUSE",
    "AURORA",
    "MINTPAY",
    "CASA&CO",
    "ZENFUEL",
  ];
  return (
    <div className="overflow-hidden border-b border-white/10 bg-ink py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.35em] text-bone/35">
        Scripts running for
      </p>
      <div className="flex w-max animate-marquee-rev items-center gap-16 whitespace-nowrap opacity-45">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="font-display text-2xl font-semibold tracking-tight text-bone">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

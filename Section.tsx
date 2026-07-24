export function SectionHead({
  kicker,
  title,
  sub,
  align = "left",
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-lime">
        {kicker}
      </span>
      <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-bone/55">{sub}</p>}
    </div>
  );
}

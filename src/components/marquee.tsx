export function Marquee() {
  const items = [
    "ESPORTS",
    "COMMUNITY",
    "FORMAZIONE",
    "TORNEI",
    "GAMING",
    "ACADEMY",
    "SARDEGNA",
    "GG",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-white/5 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-[0.3em] text-white/5 uppercase mx-8 flex-shrink-0"
          >
            {item}
            <span className="ml-8 text-gg-orange/10">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}

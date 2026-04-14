const highlights = [
  {
    value: "2025",
    label: "Founded in Lagos with a product-first operating model",
  },
  {
    value: "13",
    label: "Repo-backed products across fintech, commerce, logistics, hospitality, and ops",
  },
  {
    value: "9 sectors",
    label: "Built for SMEs, digital operators, and emerging growth teams across multiple industries",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">About NEXGEN</p>
          <h2 className="mt-5 max-w-md font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            We turn bold digital ideas into products people actually use.
          </h2>
        </div>

        <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8 lg:p-10">
          <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            NEXGEN TECH INNOVATIONS LIMITED is a private technology company building
            practical digital systems for modern African businesses. Our work sits at the
            intersection of product strategy, software engineering, and operational scale,
            helping teams launch platforms that are commercially sharp, technically durable,
            and grounded in real operating complexity.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-white/8 bg-black/20 p-5"
              >
                <p className="font-display text-2xl font-bold text-[#d7ff64]">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

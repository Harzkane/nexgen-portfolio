const metrics = [
  { value: "14", label: "Products launched or showcased" },
  { value: "9", label: "Core sectors now represented across the portfolio" },
  { value: "2025", label: "Year the company was established" },
  { value: "End-to-end", label: "Strategy, design, engineering, and delivery" },
];

export default function Metrics() {
  return (
    <section id="impact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Impact snapshot</p>
            <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Signals of traction, range, and execution depth.
            </h3>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/62">
            The portfolio now spans payment infrastructure, commerce, logistics,
            hospitality, community, agri-tech, and internal operating systems built for
            local realities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`rounded-[30px] border p-6 ${
                index === 0
                  ? "border-[#d7ff64]/25 bg-[#d7ff64]/10"
                  : index === 1
                    ? "border-[#7df9c6]/20 bg-[#7df9c6]/10"
                    : "border-white/8 bg-white/[0.03]"
              }`}
            >
              <p className="font-display text-4xl font-bold tracking-[-0.05em] text-white">
                {metric.value}
              </p>
              <p className="mt-4 max-w-[16rem] text-sm leading-7 text-white/65">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

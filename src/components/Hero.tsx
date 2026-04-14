"use client";

import { motion } from "framer-motion";

const proofPoints = [
  "13 repo-backed products across fintech, commerce, logistics, hospitality, and operations",
  "Case studies grounded in real systems, not speculative redesigns",
  "Product thinking, design, engineering, and delivery in one team",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#d7ff64]/10 blur-3xl" />
        <div className="absolute right-[10%] top-16 h-72 w-72 rounded-full bg-[#7df9c6]/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/65">
            <span className="h-2 w-2 rounded-full bg-[#d7ff64]" />
            Abuja founded, Africa focused
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            We design
            <span className="text-[#d7ff64]"> category-defining </span>
            digital products for ambitious African businesses.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            NEXGEN builds fintech, marketplaces, internal tools, logistics, and
            operational software that feels sharp, scales cleanly, and solves local
            business realities for founders and growth teams.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014] shadow-[0_16px_40px_rgba(215,255,100,0.18)]"
            >
              Explore selected work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-7 py-4 font-semibold text-white"
            >
              Book a strategy call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Positioning</p>
                <p className="mt-3 max-w-xs font-display text-2xl font-semibold text-white">
                  Product partner for fast-moving founders and operators
                </p>
              </div>
              <div className="rounded-2xl border border-[#d7ff64]/30 bg-[#d7ff64]/10 px-4 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f5ffc7]/70">Focus</p>
                <p className="mt-1 text-lg font-semibold text-[#f5ffc7]">SME scale-up systems</p>
              </div>
            </div>

            <div className="space-y-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-black/18 px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7df9c6]" />
                  <p className="text-sm leading-7 text-white/78">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/4 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/40">What you get</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Serious product execution backed by working systems and clear product thinking.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-[#f4c98b]/10 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[#f9e2c1]/65">Approach</p>
                <p className="mt-3 text-lg font-semibold text-[#fff4e5]">
                  Lean teams. Clear systems. Evidence-led execution.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

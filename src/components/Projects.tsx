"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectLogo from "@/components/ProjectLogo";
import ProjectModal from "@/components/ProjectModal";

type Category =
  | "All"
  | "Fintech"
  | "E-commerce"
  | "Infrastructure"
  | "Dev Tools"
  | "AgriTech"
  | "Community"
  | "Hospitality"
  | "Logistics"
  | "Property";

interface Project {
  name: string;
  image: string;
  description: string;
  tags: string[];
  category: Category;
  featured?: boolean;
  gradient: string;
  stat: string;
  proof: string;
  url: string;
  caseStudyPath?: string;
}

const projects: Project[] = [
  {
    name: "AfriRail Core",
    image: "",
    description:
      "Production-grade, multi-region payment infrastructure engine for Pan-African financial rails. Integrates multi-region PostgreSQL databases, dual-layer idempotency, KYC/AML gates, and ISO 20022 Go connectors.",
    tags: ["TypeScript", "Go", "PostgreSQL", "Redis"],
    category: "Infrastructure",
    featured: true,
    gradient: "from-[#7dd3fc] via-[#0284c7] to-[#0369a1]",
    stat: "Multi-region rails",
    proof: "Pan-African payment engine and ISO 20022 Go connector",
    url: "",
    caseStudyPath: "/work/afrirail-core",
  },
  {
    name: "Bruthol",
    image: "",
    description:
      "Multi-vendor commerce infrastructure with product lifecycle management, vendor tooling, analytics, and a sharper retail experience.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "E-commerce",
    featured: true,
    gradient: "from-[#f9d976] via-[#f39f86] to-[#ef6f6c]",
    stat: "Marketplace stack",
    proof: "Multi-vendor commerce infrastructure",
    url: "https://bruthol.com",
    caseStudyPath: "/work/bruthol",
  },
  {
    name: "Glotrade",
    image: "/projects/glotrade.png",
    description:
      "Pan-African e-commerce marketplace connecting businesses and customers through secure payments, delivery support, and broad product discovery.",
    tags: ["Next.js", "Marketplace", "Payments", "Logistics"],
    category: "E-commerce",
    featured: true,
    gradient: "from-[#88e5ff] via-[#4ea1ff] to-[#2758ff]",
    stat: "African marketplace",
    proof: "Pan-African marketplace and delivery flows",
    url: "https://www.glotrade.online/",
    caseStudyPath: "/work/glotrade",
  },
  {
    name: "AfriExchange (AfriX)",
    image: "/projects/afrix.png",
    description:
      "Peer-to-peer crypto exchange built for secure local digital token trades, better trust signals, and live rate visibility.",
    tags: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    category: "Fintech",
    featured: true,
    gradient: "from-[#8ea7ff] via-[#7b77ff] to-[#5451ff]",
    stat: "Fintech product",
    proof: "Exchange, escrow, and agent operations",
    url: "http://afri-x.vercel.app/",
    caseStudyPath: "/work/afrix",
  },
  {
    name: "NaijaDevHub",
    image: "/projects/naijadevhub.png",
    description: "Lean developer SaaS toolkit for Nigerian builders, bundling URL shortening, email, WhatsApp, payments, and utility APIs on free-tier infrastructure.",
    tags: ["Flask", "SQLite", "Oracle Cloud", "Paystack"],
    category: "Dev Tools",
    gradient: "from-[#c2a8ff] via-[#a37cff] to-[#7b4dff]",
    stat: "Developer toolkit",
    proof: "Utility APIs and builder tooling",
    url: "https://naijadevhub.online",
    caseStudyPath: "/work/naijadevhub",
  },
  {
    name: "CryptoBills Nigeria",
    image: "/projects/cryptobills.png",
    description:
      "Crypto-powered utility payments with on-chain verification, instant bill fulfillment, and float-managed fiat operations.",
    tags: ["Next.js", "Express", "Polygon"],
    category: "Fintech",
    gradient: "from-[#66e3b3] via-[#22c58b] to-[#0f9f6e]",
    stat: "Crypto utility gateway",
    proof: "On-chain verification with bill fulfillment",
    url: "https://cryptobills.com",
    caseStudyPath: "/work/cryptobills",
  },
  {
    name: "RentHub",
    image: "/projects/renthub.png",
    description:
      "Trust-first rental marketplace with verified listings, escrow-backed payments, tours, reviews, and direct landlord messaging.",
    tags: ["Next.js", "Express", "PostgreSQL"],
    category: "Property",
    gradient: "from-[#ffb0bf] via-[#ff7d9c] to-[#ff5d80]",
    stat: "Rental trust platform",
    proof: "Escrow, tours, reviews, and landlord messaging",
    url: "https://renthub.shop",
    caseStudyPath: "/work/renthub",
  },
  {
    name: "Exonec",
    image: "/projects/exonec.png",
    description:
      "Multi-tenant WhatsApp automation platform with subscription billing, self-service FAQ management, and admin operations tooling.",
    tags: ["Node.js", "MongoDB", "WhatsApp"],
    category: "Infrastructure",
    gradient: "from-[#73f0af] via-[#30c87e] to-[#138f57]",
    stat: "WhatsApp SaaS platform",
    proof: "Multi-tenant automation with billing",
    url: "https://exonec.com",
    caseStudyPath: "/work/exonec",
  },
  {
    name: "PayUnify Nigeria",
    image: "/projects/payunify.png",
    description:
      "Payment orchestration platform with provider failover, webhook normalization, merchant dashboards, and SDK tooling for Nigerian payment flows.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    category: "Infrastructure",
    gradient: "from-[#90c7ff] via-[#4a92ff] to-[#2f6bff]",
    stat: "Payment orchestration",
    proof: "Provider routing, failover, and webhooks",
    url: "https://payunify.ng",
    caseStudyPath: "/work/payunify",
  },
  {
    name: "PlugNG Shop",
    image: "/projects/plugng.png",
    description:
      "Nigeria-focused commerce platform with wallet and Paystack payments, reserved inventory, public order tracking, and deep admin operations.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "E-commerce",
    gradient: "from-[#ffb6f5] via-[#f274df] to-[#d947b6]",
    stat: "Commerce platform",
    proof: "Wallets, reserved inventory, and ops tooling",
    url: "https://plugng.shop",
    caseStudyPath: "/work/plugng",
  },
  {
    name: "AquaFarm",
    image: "/projects/aquafarm.png",
    description:
      "Farm operating system for catfish producers, combining daily farm control, alerts, reports, billing, and operational SaaS tooling.",
    tags: ["Next.js", "MongoDB", "Paystack"],
    category: "AgriTech",
    gradient: "from-[#65d5c3] via-[#2ea7a0] to-[#1b6f78]",
    stat: "Farm OS",
    proof: "Daily farm control with reporting and alerts",
    url: "https://aquafarm-ng.vercel.app/",
    caseStudyPath: "/work/aquafarm",
  },
  {
    name: "NaijaTalk",
    image: "/projects/najatalk.png",
    description:
      "Trust-first Nigerian community platform unifying discussion, marketplace activity, wallet flows, premium features, contests, and admin governance.",
    tags: ["Next.js", "Express", "MongoDB"],
    category: "Community",
    gradient: "from-[#ffd36a] via-[#ff9c5f] to-[#ff6b6b]",
    stat: "Community platform",
    proof: "Discussion, wallet flows, and governance",
    url: "https://najatalk-talk.vercel.app/",
    caseStudyPath: "/work/najatalk",
  },
  {
    name: "NEXGEN Hotel",
    image: "/projects/nexgen-hotel.png",
    description:
      "Hotel booking and operations platform with room-type-first search, reservations, billing, housekeeping, maintenance, audit, and staff controls.",
    tags: ["Next.js", "Express", "Prisma"],
    category: "Hospitality",
    gradient: "from-[#8fd3ff] via-[#61a8ff] to-[#385bff]",
    stat: "Hotel ops platform",
    proof: "Reservations, billing, and room operations",
    url: "https://nexgen-hotel.vercel.app",
    caseStudyPath: "/work/nexgen-hotel",
  },
  {
    name: "TripCarry",
    image: "/projects/tripcarry.png",
    description:
      "Map-first intercity parcel logistics platform connecting senders and transporters through route intelligence, live tracking, and driver command flows.",
    tags: ["Expo", "React Native", "Mapbox"],
    category: "Logistics",
    gradient: "from-[#59e0d0] via-[#14b8a6] to-[#0f766e]",
    stat: "Logistics marketplace",
    proof: "Route intelligence with live parcel tracking",
    url: "",
    caseStudyPath: "/work/tripcarry",
  },
];

const filters: Category[] = [
  "All",
  "Fintech",
  "E-commerce",
  "Infrastructure",
  "Dev Tools",
  "AgriTech",
  "Community",
  "Hospitality",
  "Logistics",
  "Property",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Selected work</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              A portfolio shaped around real products, real complexity, and real market constraints.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/62">
            These case studies span payments, marketplaces, logistics, hospitality,
            community, agri-tech, and internal tooling. Open any project to see a
            repo-backed breakdown of the system, not just polished surface design.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const count =
              filter === "All"
                ? projects.length
                : projects.filter((project) => project.category === filter).length;

            const isActive = activeFilter === filter;

            return (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold ${
                  isActive
                    ? "border-[#d7ff64]/40 bg-[#d7ff64] text-[#091014]"
                    : "border-white/10 bg-white/[0.03] text-white/70"
                }`}
              >
                {filter}
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${
                    isActive ? "bg-black/10 text-[#091014]/80" : "bg-white/8 text-white/45"
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                key={project.name}
                layout
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28, delay: index * 0.03, ease: "easeOut" }}
                onClick={() => setSelected(project)}
                className={`group text-left ${
                  project.featured ? "xl:col-span-2" : ""
                }`}
              >
                <div className="h-full rounded-[30px] border border-white/8 bg-white/[0.03] p-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-white/14 group-hover:bg-white/[0.045] group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.24)]">
                  <div
                    className={`relative flex items-center overflow-hidden rounded-[24px] bg-gradient-to-br ${project.gradient} ${
                      project.featured ? "min-h-[18rem]" : "min-h-[15rem]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.36),transparent_40%)]" />
                    <div className="absolute inset-0 bg-black/12" />

                    <div className="relative z-10 w-full px-6 py-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex rounded-full border border-white/20 bg-black/12 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/78">
                          {project.stat}
                        </div>
                        {project.caseStudyPath && (
                          <div className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                            View work
                          </div>
                        )}
                      </div>

                      <div className="mt-10 rounded-[24px] bg-[#f6f0e6]/88 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur">
                        <ProjectLogo
                          name={project.name}
                          className="h-20 w-full sm:h-24"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-full border border-white/16 bg-black/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Open case study
                    </div>
                  </div>

                  <div className="px-2 pb-2 pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/35">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 rounded-2xl border border-white/8 bg-black/14 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                      {project.proof}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-xs font-semibold text-white/66"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/42">
                        {project.caseStudyPath ? "Detailed case study available" : "Project overview"}
                      </p>
                      <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/74">
                        {project.caseStudyPath ? "View work" : "View details"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}

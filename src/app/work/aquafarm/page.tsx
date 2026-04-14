import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Daily farm operations workspace for batches, tanks, feeding logs, mortality tracking, water quality, tank movements, harvest, and feed inventory.",
  "Planning and execution layer spanning dashboard action prompts, calendar milestones, playbook guidance, and reports designed to support operational decisions.",
  "Commercial and business tooling for financial entries, revenue visibility, CSV export, subscription billing, reconciliation, and plan-based access control.",
  "Reliability and observability layer with alert evaluation, outbound notification dispatch, cron run logging, ops monitoring, audit logs, and bounded internal maintenance jobs.",
  "Multi-tenant SaaS model for farm owners and staff, including commercial-only controls for staff seats, audit visibility, and owner-facing ops surfaces.",
];

const stack = [
  "Next.js 14",
  "React 18",
  "MongoDB",
  "Mongoose",
  "NextAuth",
  "JWT Sessions",
  "Paystack",
  "Upstash Redis",
  "Recharts",
  "Tailwind CSS",
  "Framer Motion",
  "Radix UI",
];

const metrics = [
  { value: "72", label: "app files across dashboard pages, auth, API routes, billing flows, alerts, reports, and cron endpoints" },
  { value: "15", label: "data models covering batches, tanks, logs, financials, feed inventory, alerts, billing events, cron runs, and audit history" },
  { value: "28", label: "core library files for auth, plans, reports, billing reconciliation, feed logic, alerts, audit, and transactions" },
  { value: "3", label: "subscription tiers implemented for free, pro, and commercial farm operations" },
];

const valueThemes = [
  {
    title: "More than a tracker",
    text: "AquaFarm is explicitly trying to become the farmer’s daily control system. The internal docs repeatedly position it as a Farm OS, where the product should tell an operator what matters today and what action comes next.",
  },
  {
    title: "Built around real farm routines",
    text: "The strongest product quality is how closely the modules map to actual catfish workflow: stocking, allocation, feeding, mortality, water checks, harvest timing, feed runway, and cycle review.",
  },
  {
    title: "Operational truth plus SaaS controls",
    text: "The repo combines domain workflows with multi-tenant SaaS mechanics like plan limits, billing, reconciliation, staff seats, audit logs, and owner-only ops visibility. That makes it a product business, not only a farm management tool.",
  },
  {
    title: "Signals are treated as actions",
    text: "Alerts, dashboard prompts, milestone tracking, cron-backed evaluations, and ops monitoring show a clear effort to turn farm events into guided responses rather than passive reporting.",
  },
];

const architecture = [
  "Single Next.js App Router product with dashboard pages, auth pages, marketing pages, and route-handler APIs living in one cohesive workspace",
  "MongoDB and Mongoose model layer for farm records, planning data, financials, billing events, alerts, audits, and cron observability",
  "NextAuth credentials-based access with tenant scoping for owners and staff, plus middleware gating for tier restrictions and commercial-only modules",
  "Runtime controls layered on top through Paystack billing, Upstash-backed rate limiting, protected internal cron routes, alert dispatch, and ops health monitoring",
];

const systemBreakdown = [
  {
    title: "Farm operations engine",
    text: "The core domain handles batches, tanks, daily logs, tank movements, feed inventory, mortality, water-quality entries, and harvest records, with validators and atomic write helpers for higher-risk flows.",
  },
  {
    title: "Command center and alerts",
    text: "AquaFarm’s dashboard, alerts page, alert rules, and dispatch system are designed to surface what needs attention across operations, health, planning, business risk, and cron reliability.",
  },
  {
    title: "Commercial and billing layer",
    text: "Plan entitlements, Paystack checkout and verification, webhooks, billing status, cancellation, reconciliation, and owner-only operational pages show a serious SaaS backbone behind the domain product.",
  },
  {
    title: "Ops and trust surfaces",
    text: "The platform includes cron monitoring, audit logs, staff settings, alert incident models, and commercial owner gating, which help operators trust the system as a durable source of operational memory.",
  },
];

const evidencePoints = [
  "The README defines AquaFarm as a production-capable aquafarm management and planning SaaS, with core domain coverage across operations, planning, billing, team controls, and ops visibility.",
  "The internal Farm OS document says the goal is for farmers to open AquaFarm first every morning to know what matters today, and it explicitly describes the product as moving beyond a tracker into a command center.",
  "The app route tree includes dashboard modules for feeding, mortality, batches, tanks, feed inventory, harvest, water quality, reports, alerts, calendar, playbook, billing, staff, audit, and ops monitoring.",
  "The architecture docs show protected cron endpoints, alert evaluation and dispatch, tenant scoping for owners and staff, atomic write guards for critical workflows, and owner-facing cron health APIs.",
];

export default function AquaFarmCaseStudyPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen px-6 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
          >
            Back to selected work
          </Link>

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Case study</p>
              <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                AquaFarm is a Farm OS for catfish operations, built to turn daily farm events into clearer control, better planning, and stronger operational memory.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The codebase goes far beyond logbook software. It combines batch and tank
                control, feed and harvest workflows, financial visibility, alerting,
                reporting, billing, staff access, and owner-facing ops monitoring inside one
                multi-tenant SaaS product.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://aquafarm-ng.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: AgriTech
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7ff64]">Project snapshot</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/8 bg-black/16 p-5">
                    <p className="font-display text-3xl font-bold tracking-[-0.04em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">What NEXGEN built</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                A daily operating system for aquaculture, with SaaS controls and reliability layers baked in.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/8 bg-[#12181d] p-8">
              <div className="grid gap-4">
                {coreSystems.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/8 bg-black/18 px-5 py-5">
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Product framing</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  The strongest idea in AquaFarm is turning farm reality into coordinated action, not isolated records.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                The internal docs are unusually clear about the product ambition: the dashboard
                should become the first place a farmer checks every morning, and the system
                should hold the operational truth of the farm.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#65d5c3]/25 bg-[#65d5c3]/10"
                      : index === 1
                        ? "border-[#d7ff64]/25 bg-[#d7ff64]/10"
                        : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-white/46">{item.title}</p>
                  <p className="mt-4 text-base leading-8 text-white/74">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Architecture</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                One SaaS workspace connecting farm operations, subscription controls, and operational observability.
              </h2>
              <div className="mt-8 space-y-3">
                {architecture.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/8 bg-black/18 px-4 py-4 text-sm leading-7 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Technology stack</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
                      index % 3 === 0
                        ? "border-[#65d5c3]/30 bg-[#65d5c3]/10 text-[#e0fff9]"
                        : index % 3 === 1
                          ? "border-[#d7ff64]/30 bg-[#d7ff64]/10 text-[#f5ffc7]"
                          : "border-white/10 bg-white/[0.04] text-white/72"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] border border-white/8 bg-black/16 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">What stands out</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  AquaFarm stands out because it treats operational guidance as the product.
                  Billing, alerts, reports, and staff controls matter, but they are all in
                  service of one goal: helping the farm run better every day.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The repo shows a product that is trying to become the trusted memory and command layer of the farm.
              </h2>
              <div className="mt-8 grid gap-4">
                {systemBreakdown.map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-black/18 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/45">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Repo evidence</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The implementation consistently supports the Farm OS direction.
              </h2>
              <div className="mt-8 space-y-4">
                {evidencePoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/8 bg-black/18 px-4 py-4 text-sm leading-7 text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

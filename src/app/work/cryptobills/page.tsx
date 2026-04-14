import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Crypto quote engine that converts NGN bill amounts into time-bound USDT payment requests with service context preserved end to end.",
  "On-chain verification layer on Polygon that checks asset, recipient wallet, transfer value, transaction status, and anti-replay conditions before fulfillment.",
  "Utility fulfillment system wired to VTPass for airtime, data, electricity, cable, education, and insurance service delivery.",
  "Operational float management model for tracking NGN reserves, ledger movements, low-balance alerts, and delivery risk inside a bootstrapped service.",
  "Merchant and admin surfaces for transaction history, white-label payment entry points, live sales tracking, and intervention tooling.",
];

const stack = [
  "Next.js 16",
  "React 19",
  "RainbowKit",
  "wagmi",
  "viem",
  "Express",
  "TypeScript",
  "MongoDB",
  "Mongoose",
  "Ethers v6",
  "Hardhat",
  "OpenZeppelin",
  "AWS SES",
  "VTPass",
];

const metrics = [
  { value: "3", label: "coordinated layers: web app, TypeScript backend, and smart-contract workspace" },
  { value: "32", label: "backend source files handling pricing, verification, transactions, float, admin, and notifications" },
  { value: "90s", label: "quote lifetime designed into the pricing flow to keep crypto-fiat settlement bounded" },
  { value: "6+", label: "utility categories supported across airtime, data, power, cable, education, and insurance" },
];

const operatingThemes = [
  {
    title: "Built around a real liquidity constraint",
    text: "CryptoBills is not pretending crypto instantly becomes fiat by magic. The product story explicitly includes a managed NGN float, payout thresholds, exposure limits, and top-up workflows, which makes the operating model much more credible.",
  },
  {
    title: "Verification before fulfillment",
    text: "The payment flow is designed around verification on demand instead of vague wallet screenshots or trust-based confirmation. The backend checks chain-level transfer evidence before it attempts bill delivery.",
  },
  {
    title: "Utility-first rather than exchange-first",
    text: "This is not a trading product wearing a payments label. The repo is organized around practical service delivery: categories, plan variations, beneficiary validation, receipts, and fast repeat usage.",
  },
  {
    title: "Operations are part of the product",
    text: "Admin metrics, low-float alerts, ledger visibility, and remote reconciliation are treated as first-class capabilities. That turns the build into a service operation system, not just a public checkout flow.",
  },
];

const architecture = [
  "Next.js frontend with wallet connection, quote widget, payment modal, transaction history, merchant surface, and admin-facing UI components",
  "Express and TypeScript backend with modular controllers, routes, pricing services, blockchain verification, float management, SES notifications, and standardized API responses",
  "Mongo-backed persistence for quotes, transactions, and float records, with health checks, logging, and guarded operational endpoints",
  "Hardhat and OpenZeppelin contract workspace for token-side testing and deployment support on Polygon-compatible networks",
];

const systemBreakdown = [
  {
    title: "Quote and pricing engine",
    text: "Rates are fetched and cached, service fees are computed using the documented hybrid model, and quotes are persisted with bill metadata so later verification and fulfillment can reconcile against the original user intent.",
  },
  {
    title: "Blockchain verification flow",
    text: "The backend verifies transaction hashes against the configured USDT contract and treasury wallet, parses transfer logs, applies a small amount tolerance, and prevents duplicate processing before moving the order state forward.",
  },
  {
    title: "Service fulfillment and validation",
    text: "VTPass integration is paired with live variation fetching and beneficiary checks so the frontend can validate meters, smartcards, or plan choices before any payment is requested.",
  },
  {
    title: "Operational admin hub",
    text: "The admin system tracks sales volume, success rate, transaction counts, float ledger events, and alert conditions, with API-key style protection and SES-powered notifications for low-balance or system-health events.",
  },
];

const evidencePoints = [
  "The docs explicitly frame the service as a non-custodial crypto utility gateway, with float management, exposure rules, and profitability targets documented as part of the product design.",
  "The backend is organized into pricing, payment, blockchain, float, notification, and admin service areas instead of one monolithic controller layer.",
  "Frontend surfaces include `/history`, `/merchant`, payment modal flows, saved beneficiaries, validation hooks, and admin components for float and ledger visibility.",
  "The progress tracker records real milestones such as live quote widgets, Polygon verification, expanded service catalog, digital receipts, transaction history, and an operational admin dashboard.",
];

export default function CryptoBillsCaseStudyPage() {
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
                CryptoBills is a crypto-to-utility payments platform built around trustable verification, fast fulfillment, and real operational control.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                What makes this project compelling is that it solves a real local payment edge
                case with a complete service model. The repo shows a wallet-connected checkout
                flow, a TypeScript backend for quote generation and bill delivery, and an
                admin-operated float system that turns crypto receipts into usable NGN service
                fulfillment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://cryptobills.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Crypto utility gateway
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
                A bill-pay operating system that connects wallet UX, settlement logic, and service delivery.
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
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Why the project matters</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  The strongest part of CryptoBills is that the operational logic is visible, not hidden.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                Many fintech demos abstract away how money movement actually works. This repo
                shows the constraints, checks, and fallback thinking that make the product feel
                materially closer to a runnable service.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {operatingThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#66e3b3]/25 bg-[#66e3b3]/10"
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
                A layered build spanning checkout UX, verification services, admin operations, and chain tooling.
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
                        ? "border-[#66e3b3]/30 bg-[#66e3b3]/10 text-[#dffff2]"
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
                  The combination of wallet UX, quote expiry, chain verification, and float
                  operations gives CryptoBills a more defensible product story than a simple
                  checkout page connected to a wallet button.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The product becomes more credible the deeper you look into the workflow design.
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
                The codebase and docs both support the case-study claims.
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

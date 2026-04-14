import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Core payment-routing engine that registers provider adapters, scores provider health, and selects the best path based on routing strategy, cooldown windows, and retryability.",
  "Unified API and merchant infrastructure for payment initialization, verification, analytics, billing, developer tooling, enterprise controls, and environment-aware authentication.",
  "Webhook normalization layer that ingests disparate events from multiple providers, converts them into one internal schema, and forwards signed merchant webhooks with retry support.",
  "Merchant dashboard for transactions, API key management, developer settings, billing, webhook history, and operational visibility across test and live environments.",
  "Developer ecosystem surface that includes landing site, docs app, React package, sample e-commerce integration, and provider-specific packages for self-hosted orchestration flows.",
];

const stack = [
  "TypeScript",
  "Turbo",
  "Next.js 16",
  "React 19",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Paystack",
  "Flutterwave",
  "Monnify",
  "Korapay",
  "JWT",
  "Winston",
  "Framer Motion",
];

const metrics = [
  { value: "10", label: "workspace packages and apps spanning core SDK, provider adapters, dashboard, docs, marketing site, API, and sample commerce demo" },
  { value: "4", label: "payment providers supported across Paystack, Flutterwave, Monnify, and Korapay" },
  { value: "46", label: "API source files for auth, billing, analytics, webhooks, enterprise services, transaction storage, and merchant operations" },
  { value: "2", label: "operating modes beyond simple SDK usage: aggregator model and orchestrator model with managed or private execution" },
];

const valueThemes = [
  {
    title: "Built for Nigerian payment reality",
    text: "The core framing in the repo is that provider failure is normal, not exceptional. PayUnify’s architecture assumes downtime, degraded success rates, and inconsistent gateway behavior, then routes around it instead of making merchants solve that complexity alone.",
  },
  {
    title: "Product plus protocol thinking",
    text: "This is not only a merchant dashboard. It combines a routing engine, a normalized payment API, provider adapters, merchant operations, auditability, and developer-facing integration surfaces into one coherent platform.",
  },
  {
    title: "Flexible operating model",
    text: "The platform supports both a managed SaaS-style aggregator path and orchestration models where enterprises keep their own provider relationships and keys. That makes the architecture much more adaptable than a one-mode gateway wrapper.",
  },
  {
    title: "Developer experience is part of the product",
    text: "The monorepo includes docs, React integration surfaces, a sample commerce app, and premium dashboard tooling because adoption depends on how quickly developers can test, understand, and trust the system.",
  },
];

const architecture = [
  "Monorepo built with Turbo and shared TypeScript packages, separating core routing logic, provider adapters, API server, merchant dashboard, docs, marketing site, and sample integrations",
  "Core SDK layer with provider registry, payment router, health monitor, validators, and advanced orchestration primitives",
  "Express and Prisma API layer handling merchant auth, billing, analytics, webhook ingestion and forwarding, audit logs, key management, and transaction persistence",
  "Next.js merchant dashboard and separate public web/doc surfaces for product marketing, developer onboarding, and integration walkthroughs",
];

const systemBreakdown = [
  {
    title: "Routing and health engine",
    text: "The core package contains the payment router, provider registry, health monitor, and validator layer. The docs describe weighted routing, cooldown windows, retry chains, and preview tooling so merchants can understand how the switch behaves under stress.",
  },
  {
    title: "Merchant auth and key infrastructure",
    text: "The API layer includes a dedicated key service, auth middleware, tier enforcement, and database-backed merchant context so the platform can support test/live isolation, API key rotation, and secure multi-tenant access patterns.",
  },
  {
    title: "Webhook and audit operations",
    text: "Webhook handling is treated as a product surface, not a footnote. The system normalizes provider callbacks, stores delivery records, retries failed deliveries with backoff, and exposes history and inspection views in the dashboard.",
  },
  {
    title: "Merchant and developer surfaces",
    text: "Dashboard routes cover transactions, developers, API keys, billing, settings, and webhook history, while the wider monorepo includes docs and a sample e-commerce app that demonstrates how PayUnify is meant to be embedded in real products.",
  },
];

const evidencePoints = [
  "The README positions PayUnify as an intelligent payment SDK for Nigerian businesses with automatic failover, normalized webhooks, provider health routing, and 95%+ success-rate targets.",
  "The operating-model docs clearly define aggregator and orchestrator modes, including managed cloud execution and private self-hosted library flows for more demanding clients.",
  "The dashboard progress docs show completed merchant UI work for API keys, webhook history, tier awareness, and a normalized webhook engine with signed forwarding and retry logic.",
  "The repo includes dedicated packages for `core`, `react`, and each provider adapter, plus apps for `api`, `dashboard`, `docs`, `web`, and `sample-ecom`, which is a strong signal of platform-level ambition rather than a thin wrapper.",
];

export default function PayUnifyCaseStudyPage() {
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
                PayUnify is a payment orchestration platform built to keep Nigerian payment flows resilient when providers fail, slow down, or drift apart.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The monorepo shows a serious infrastructure product: SDK routing logic,
                provider adapters, a Prisma-backed API, merchant dashboards, developer docs,
                and sample integration surfaces. It is much more than a payment wrapper or
                dashboard skin over one gateway.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://payunify.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Payment orchestration
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
                A resilient payment stack spanning orchestration logic, merchant operations, and developer adoption.
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
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Why it matters</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  The strongest idea here is that payment reliability is treated as a systems problem, not merchant bad luck.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                PayUnify’s value comes from the combination of routing, observability, webhook
                normalization, and merchant tooling. The repo consistently frames resilience as
                the main product promise.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#90c7ff]/25 bg-[#90c7ff]/10"
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
                A platform architecture that supports SDK usage, managed orchestration, and merchant operations in one system.
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
                        ? "border-[#90c7ff]/30 bg-[#90c7ff]/10 text-[#e8f3ff]"
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
                  The most distinctive part of PayUnify is that it supports different commercial
                  models without changing its core identity: managed payment infrastructure for
                  smaller merchants, and orchestration intelligence for larger teams that already
                  own their provider relationships.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The repo shows a platform designed around resilience, visibility, and merchant control.
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
                The structure and docs both support the orchestration story.
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

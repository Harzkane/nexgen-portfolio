import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const productLayers = [
  "Multi-region physical database isolation separating Nigeria (NGN) and WAEMU (XOF) zones to meet strict data sovereignty requirements",
  "High-performance systems integration including a PAPSS ISO 20022 Go connector building pacs.008 credit transfers and parsing responses",
  "Intelligent, health-scored transaction routing with dynamic failover support (Paystack → Flutterwave → Korapay)",
  "Compliance policy engine with atomic, sub-7-second KYC/KYB screening (Sumsub) and append-only AML verification (ComplyAdvantage)",
  "Distributed, dual-layer idempotency (Redis cache + PostgreSQL fallback) and a BullMQ background queue for outbox and webhook dispatch",
];

const stack = [
  "TypeScript",
  "Node.js",
  "Go",
  "PostgreSQL 16",
  "Redis 7",
  "BullMQ",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Jaeger",
  "Sentry",
  "Docker",
  "Kubernetes",
  "Terraform",
  "ISO 20022",
];

const metrics = [
  { value: "8", label: "completed engineering phases of scoping, scaffolding, and infrastructure hardening" },
  { value: "11", label: "smoke regression suites verifying database isolation, compliance, and payout execution" },
  { value: "2", label: "physically isolated regional database instances (af-south-1 & eu-west-3)" },
  { value: "100%", label: "green regression gate with zero TypeScript or Go compilation errors" },
];

const roleSurfaces = [
  {
    title: "Regional Data Sovereignty",
    text: "Physical database isolation routing transactions to NGN/af-south-1 or XOF/eu-west-3 regional PostgreSQL instances, complying with local data residency laws and BCEAO/CBN rules.",
  },
  {
    title: "Distributed Job Processing",
    text: "A BullMQ background system with custom outbox processors, exponential backoff (1s to 16s), dead-letter queuing, and auto-opening of reconciliation cases on transaction failures.",
  },
  {
    title: "Strict Compliance Policy Gating",
    text: "Atomic KYC/AML policy gates utilizing Sumsub webhooks and ComplyAdvantage screening with an automated 7-second hard abort guard to prevent risky financial operations.",
  },
  {
    title: "ISO 20022 Go Connector",
    text: "A high-performance Go-based integration engine generating pacs.008 XML messages and handling asynchronous callback responses (pacs.002/pacs.028) for PAPSS payments.",
  },
];

const systemBreakdown = [
  {
    title: "Intelligent Routing & Failover",
    text: "Dynamic, health-scored failover routing across providers (Paystack, Flutterwave, Korapay) checking transaction sizes, currency support, and region-scoped rules before execution.",
  },
  {
    title: "Dual-Layer Idempotency Lock",
    text: "A composite redis-key lock logic (afrirail:{REGION}:lock:{merchantId}:{key}) for fast-path atomic verification, with automatic fallback to database indexes to ensure absolute transactional integrity.",
  },
  {
    title: "Gross-to-Net Settlement",
    text: "A dedicated settlement engine assigning payments to chronological windows, calculating gross-to-net sums, registering beneficiaries, and handling async payout callbacks.",
  },
  {
    title: "Regulatory Reporting Hub",
    text: "An append-only audit logger tracking and storing immutable records of data access, backing a reporting service designed for monthly CBN and BCEAO regulatory exports.",
  },
];

const architecture = [
  "Multi-service structure spanning api-gateway, payments, settlement, reconciliation, ledger, compliance, and network-connectors-go",
  "Postgres-backed transactional outbox pattern working as an interim event backbone prior to Kafka integration",
  "Dockerized local environments containerizing Postgres, Redis, and all microservices for zero-config onboarding",
  "Kubernetes Kustomize profiles creating regional overlays (region-ng, region-xof) with horizontal pod autoscalers (HPA)",
];

const evidencePoints = [
  "Regional database pool provider configured with lazy pool creation at packages/config/src/regional-db-pool-provider.ts.",
  "PAPSS ISO 20022 credit transfer builder and XML webhook callback parser in Go inside services/network-connectors-go/internal/providers/papss.",
  "Complete regression smoke gate at tests/smoke/regional-reporting-postgres.smoke.ts verifying pool isolation and audit trail compliance.",
  "Multi-AZ VPC, EKS cluster, RDS PostgreSQL, and ElastiCache Redis infrastructure modules defined in the infra/terraform/ workspace.",
  "Kustomize overlay manifests and configurations for geographic routing at infra/k8s/overlays/region-ng and region-xof.",
];

export default function AfriRailCaseStudyPage() {
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#0284c7]">Case study</p>
              <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                AfriRail Core is a production-grade, multi-region payment infrastructure engine for Pan-African financial rails.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                This project represents core systems engineering of the highest complexity. 
                Instead of a standard customer-facing app, this codebase delivers a hardened, 
                regionally sovereign transaction orchestrator. It manages the entire lifecycle of 
                real-time money movement, regulatory compliance, and distributed tracing across 
                multiple jurisdictions.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]">
                  Infrastructure Core Active
                </div>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Payment Infrastructure
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7ff64]">Infrastructure Metrics</p>
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Platform Architecture</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Multi-region orchestration and transactional integrity.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/8 bg-[#12181d] p-8">
              <div className="grid gap-4">
                {productLayers.map((item) => (
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
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Key System Pillars</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  Built to satisfy local regulators and enterprise SLAs.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                AfriRail Core resolves the conflict between central transaction routing and 
                geographic data sovereignty.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {roleSurfaces.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#0284c7]/25 bg-[#0284c7]/10"
                      : index === 3
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#0284c7]">Microservices & Deployment</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Coordinated backend layout and deployment configs.
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Infrastructure Tech Stack</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
                      index % 3 === 0
                        ? "border-[#0284c7]/30 bg-[#0284c7]/10 text-[#e0f2fe]"
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
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">Architectural Highlight</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  The most distinctive part of AfriRail Core is the way geographical database connection 
                  pooling is isolated dynamically in memory. The system routes database commands for NGN 
                  and XOF transactions to distinct pools dynamically, preventing data leakage while 
                  enabling global orchestration logic.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System Breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Core workflows managing security and data flow.
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#0284c7]">Repository Proofs</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Codebase paths backing implementation claims.
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

          <section className="mt-20 rounded-[34px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Project Readout</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                  Why this project matters in the portfolio.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/68">
                <p>
                  AfriRail Core demonstrates a capability to engineer back-end infrastructure 
                  that handles strict financial transactional boundaries. This requires solving 
                  for distributed idempotency races, asynchronous callback anomalies, outbox patterns, 
                  and multi-region data sovereignty policies.
                </p>
                <p>
                  It highlights an advanced skillset that goes far beyond simple database CRUD 
                  operations. It is about building resilient, low-latency financial conduits 
                  instrumented with rich metrics and OpenTelemetry trace propagation across 
                  multiple backend services.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

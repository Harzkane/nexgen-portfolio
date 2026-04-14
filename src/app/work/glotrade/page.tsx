import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const platformLayers = [
  "Multi-vendor commerce marketplace with product discovery, checkout, cart, orders, reviews, and store pages",
  "Integrated wallet system for buyers and vendors with balance management, top-ups, transfers, withdrawals, and transaction history",
  "GDIP investment engine with TPIAs, GDC clusters, commodity backing, insured cycles, and statement/certificate surfaces",
  "Sales agent and referral infrastructure with commission tracking, dashboards, approval logic, and payout pathways",
  "Admin and operational tooling for products, users, orders, wallets, GDIP, reports, banners, credit requests, and security workflows",
];

const stack = [
  "Next.js 15 App Router",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "next-intl",
  "Express",
  "MongoDB",
  "Mongoose",
  "Redis rate limiting",
  "WebSockets / realtime",
  "Cloudflare R2",
  "Paystack",
  "Flutterwave",
  "Korapay",
  "node-cron",
];

const metrics = [
  { value: "97", label: "web app files in the App Router surface" },
  { value: "35", label: "API route files in the TypeScript backend" },
  { value: "31", label: "database models covering commerce and fintech flows" },
  { value: "42", label: "service-layer files supporting platform operations" },
];

const highlights = [
  {
    title: "Commerce plus fintech",
    text: "Glotrade is not just a marketplace. The codebase combines shopping, payments, wallet logic, vendor settlement, and investment infrastructure in one unified product surface.",
  },
  {
    title: "Multi-role platform design",
    text: "The route structure covers customers, vendors, admins, agents, and GDIP participants. That makes the UX and system design meaningfully more complex than a single-audience commerce app.",
  },
  {
    title: "Operational depth",
    text: "The backend is organized around controllers, services, models, jobs, providers, and middleware, which suggests a platform built for ongoing operations rather than a one-off launch build.",
  },
  {
    title: "Regional payment ambition",
    text: "The documentation and service layer point to Nigeria-first commerce with broader West African payment and wallet considerations, including multi-provider payment support and financial workflow handling.",
  },
];

const architecture = [
  "Turbo monorepo with separate `apps/web` and `apps/api` workspaces",
  "Next.js frontend with App Router pages for marketplace, admin, wallet, GDIP, orders, agent flows, and profile areas",
  "Express + TypeScript backend with versioned REST routes, role-aware middleware, and a large domain model set",
  "Dedicated service layer for payments, wallets, GDIP, referrals, reporting, analytics, escrow, inventory, notifications, and storage",
];

const roleSurfaces = [
  {
    title: "Customer surface",
    text: "The web app includes marketplace browsing, cart, checkout, wishlist, orders, wallet, notifications, support, and dashboard flows. This is a full customer product, not a thin storefront shell.",
  },
  {
    title: "Admin surface",
    text: "The admin area covers products, users, orders, wallets, withdrawals, banners, credit requests, reports, analytics, and dedicated GDIP management pages. It reads like a real operational console.",
  },
  {
    title: "Agent surface",
    text: "There are separate agent routes for referrals, commissions, and dashboards, which means the platform includes growth and distribution mechanics alongside core commerce.",
  },
  {
    title: "Investor / GDIP surface",
    text: "GDIP has its own dashboard, purchase flow, cycle pages, statements, certificates, and TPIA detail screens, giving the investment layer a first-class product experience.",
  },
];

const systemBreakdown = [
  {
    title: "GDIP engine",
    text: "The docs describe insured commodity-backed investment blocks, grouped into GDC clusters and processed through automated 37-day trade cycles. This adds a highly unusual financial-product layer to the platform.",
  },
  {
    title: "Wallet architecture",
    text: "The wallet design supports buyer and vendor wallets, transaction history, top-ups, payments, withdrawals, transfers, frozen balances, and admin fund controls, with NGN and token-aware thinking documented in the system design.",
  },
  {
    title: "Vendor settlement",
    text: "Vendor payout logic is tied to order delivery states, with automated grouping of line items by vendor and settlement into wallets. That creates a cleaner operational bridge between commerce events and money movement.",
  },
  {
    title: "Growth loops",
    text: "The sales agent and referral system adds commission logic, agent tiers, approval thresholds, dashboards, and payout pathways. That expands the platform beyond transactions into acquisition mechanics.",
  },
];

const evidencePoints = [
  "The API mounts more than thirty versioned route groups from `/api/v1/auth` and `/api/v1/market` to `/api/v1/wallets`, `/api/v1/gdip`, `/api/v1/referrals`, and `/api/v1/commissions`.",
  "The frontend route tree includes dedicated areas for `/admin`, `/agent`, `/profile/wallet`, `/gdip`, `/checkout`, and seller storefront routes under `/s/[slug]`.",
  "The wallet UI code shows transaction history, exports, top-up, withdrawal, credit request, commission widgets, and real-time wallet updates.",
  "The GDIP dashboard code includes portfolio summaries, ROI calculations, available balance checks, statement generation, and TPIA-centric views.",
];

export default function GlotradeCaseStudyPage() {
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Case study</p>
              <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Glotrade is a marketplace, wallet, investment, and operations platform built as a serious multi-system product.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The repository shows a platform with far more surface area than a typical
                e-commerce build. It blends commerce, vendor management, fintech workflows,
                GDIP investment infrastructure, referral systems, and admin operations inside
                one product ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.glotrade.online/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Marketplace + fintech ecosystem
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#f4c98b]">Platform snapshot</p>
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">What NEXGEN built</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                A layered ecosystem spanning commerce, payments, investments, and platform governance.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/8 bg-[#12181d] p-8">
              <div className="grid gap-4">
                {platformLayers.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/8 bg-black/18 px-5 py-5">
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="grid gap-5 lg:grid-cols-2">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#88e5ff]/25 bg-[#88e5ff]/10"
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

          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Role-based product design</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  Distinct surfaces for customers, admins, agents, and GDIP participants.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                One of the strongest signals in the repo is that Glotrade is designed around
                multiple user roles with different jobs to do, not a single shopping interface.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {roleSurfaces.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#7df9c6]/20 bg-[#7df9c6]/10"
                      : index === 1
                        ? "border-[#88e5ff]/25 bg-[#88e5ff]/10"
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
                Monorepo architecture built for a growing platform, not a narrow storefront.
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Technology stack</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
                      index % 3 === 0
                        ? "border-[#88e5ff]/30 bg-[#88e5ff]/10 text-[#dff8ff]"
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
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">What makes it notable</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  Glotrade stands out because it tries to unify transactional commerce and
                  financial participation in one system. That raises the bar for architecture,
                  compliance thinking, internal tooling, and user education across the product.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The standout systems go well beyond standard marketplace requirements.
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Repo evidence</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Concrete signals from the codebase that support the case-study claims.
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
                <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Project readout</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                  Why this project matters in the portfolio.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/68">
                <p>
                  Glotrade shows NEXGEN operating at platform level. The repo suggests strong
                  capability in designing systems where commerce, money movement, internal
                  governance, and multi-role user experience all need to work together.
                </p>
                <p>
                  It also gives the portfolio a more ambitious story: not only building
                  products that sell goods, but building ecosystems with wallets, payouts,
                  referrals, insured investment mechanics, and regional growth intent.
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

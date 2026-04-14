import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Community layer for threads, replies, search, bookmarking, moderation reporting, and richer thread-detail interactions.",
  "Marketplace flow for listings, buying and selling, favorites, boosted listings, and escrow-style transaction progression tied to wallet operations.",
  "Wallet and monetization stack spanning tips, ledgers, payouts, premium subscriptions, ad budgets, and payment verification.",
  "Admin 360 command center for users, bans, threads, reports, payouts, premium audits, settlement rollups, wallet alerts, platform wallet, ads review, contests, and risk signals.",
  "Governance and reliability surface with policy pages, admin action logs, synthetic monitoring, smoke tests, UI E2E checks, retention policy tooling, and drill runbooks.",
];

const stack = [
  "Next.js 15",
  "React 19",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT",
  "Paystack",
  "Playwright",
  "Tailwind CSS",
  "TipTap",
  "PDFKit",
  "Nodemailer",
];

const metrics = [
  { value: "80", label: "frontend source files across public pages, authenticated flows, wallet, premium, contests, marketplace, and admin sections" },
  { value: "68", label: "backend files across controllers, routes, models, middleware, tests, scripts, and operational utilities" },
  { value: "10", label: "admin and product domains wired into the backend API, from auth and threads to contests, premium, ads, and marketplace" },
  { value: "3", label: "core platform pillars combined in one product: talk, trade, and earn" },
];

const valueThemes = [
  {
    title: "A platform, not a forum clone",
    text: "NaijaTalk is explicitly framed as a Nigerian product where community discussion, commerce, and wallet-enabled value live together. That combination is visible throughout the repo and product docs.",
  },
  {
    title: "Trust and governance are built in early",
    text: "The product treats moderation, payout review, premium audit, ads review, wallet anomaly checks, policy pages, admin action logs, and risk signals as first-class capabilities rather than later-stage cleanup.",
  },
  {
    title: "Money features are part of the user story",
    text: "Tips, wallets, payouts, premium, boosted listings, and contest claims are integrated into the same platform identity. That gives creators, sellers, and community participants more reasons to stay inside the product.",
  },
  {
    title: "Operational maturity is unusually visible",
    text: "Synthetic monitoring, smoke suites, UI E2E, retention reporting, backup and rollback drills, and governance process documents all signal that the project is being run with production discipline, not just feature enthusiasm.",
  },
];

const architecture = [
  "Workspace split into a Next.js frontend on Vercel and an Express plus MongoDB backend on Render, connected through a configured API layer",
  "Frontend route structure covering auth, public community pages, marketplace, wallet, premium, contests, profile flows, and a large modular admin dashboard",
  "Backend API domains for auth, threads, users, premium, marketplace, ads, and contests, backed by models for wallets, transactions, reports, listings, admin actions, platform wallets, and contest entities",
  "Operational layer including backend tests, Playwright UI tests, synthetic monitors, smoke scripts, retention tooling, and policy/governance documents for controlled rollout and incident handling",
];

const systemBreakdown = [
  {
    title: "Community and discovery layer",
    text: "Users can create and explore threads, interact with reply trees, search, bookmark, report, and navigate richer discussion flows. The product is optimized for cleaner conversation rather than raw posting volume.",
  },
  {
    title: "Marketplace and wallet integration",
    text: "Marketplace listings, buy flows, transaction states, wallet movements, payouts, and boosted listings connect commerce directly to the community platform instead of sending users into a separate product.",
  },
  {
    title: "Premium, ads, and contests",
    text: "Premium subscriptions, ad budget management, contest submissions, winner claim review, and sponsor-ready flows widen the product from social utility into a monetizable platform with multiple operator surfaces.",
  },
  {
    title: "Admin 360 and risk controls",
    text: "The admin dashboard is broad and operationally serious, with sections for reports, bans, payouts, premium audits, settlement rollups, wallet mismatch investigation, platform wallet visibility, contests, AI sections, and risk signals.",
  },
];

const evidencePoints = [
  "The README and master guide both describe NaijaTalk as a Nigerian platform where people can talk, trade, and earn in one product, with stronger admin visibility and trust controls from day one.",
  "The frontend route tree includes marketplace, wallet, premium, contests, user wallets, moderation pages, public policies, and a large sectioned admin dashboard with dedicated components per operational domain.",
  "The backend includes controllers, routes, and models for threads, users, premium, ads, contests, marketplace, platform wallets, transactions, payouts, AI personas and drafts, and admin action logging.",
  "The repo contains runbooks and evidence trails for synthetic monitoring, API smoke checks, UI E2E, retention reporting, rollback and restore drills, policy governance, and production readiness.",
];

export default function NaijaTalkCaseStudyPage() {
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
                NaijaTalk is a trust-first Nigerian community platform that brings discussion, marketplace activity, wallet flows, and admin governance into one product.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The repo shows a much more ambitious platform than a standard forum. Threads,
                trading, payouts, premium, contests, ads, policy governance, and admin
                operations are all connected, with production-readiness work visible across the
                codebase and docs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://najatalk-talk.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Community platform
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
                A Nigerian digital community product with commerce, money, and governance layers tightly connected.
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
                  The strongest move here is combining utility and trust instead of treating community as content alone.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                NaijaTalk is designed to be more useful than a forum and safer than a loosely
                moderated marketplace. The product ties together engagement, money movement, and
                operational visibility in a way that feels deliberate.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#ffd36a]/25 bg-[#ffd36a]/10"
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
                A split frontend and backend platform with product, money, moderation, and ops layers all exposed clearly.
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
                        ? "border-[#ffd36a]/30 bg-[#ffd36a]/10 text-[#fff0c4]"
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
                  NaijaTalk stands out because governance is part of the product story. Admin
                  observability, policy surfaces, payout review, and operational drills are not
                  hidden implementation details; they are part of what makes the platform
                  trustworthy.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The platform gets more interesting the deeper you go into money and governance workflows.
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
                The code and operating docs both support the platform narrative directly.
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

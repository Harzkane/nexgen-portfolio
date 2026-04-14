import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const productLayers = [
  "Token exchange flows for buying, selling, sending, receiving, and swapping digital assets",
  "Agent-led operational system for KYC, deposits, withdrawals, request handling, reviews, and performance tracking",
  "Admin dashboard for users, agents, withdrawals, disputes, escrows, financial oversight, education, and security operations",
  "Mobile-first user experience built in Expo/React Native with biometric lock, push notifications, QR-based receive flow, and Zustand-powered state",
  "Blockchain and treasury tooling for testnet token deployment, mint workflows, balance checks, and transaction verification",
];

const stack = [
  "Node.js",
  "Express 5",
  "PostgreSQL",
  "Sequelize",
  "Redis",
  "Socket.io",
  "Next.js",
  "React 19",
  "Expo Router",
  "React Native",
  "Zustand",
  "Tailwind CSS",
  "Ethers",
  "Hardhat",
  "OpenZeppelin",
];

const metrics = [
  { value: "3", label: "distinct product surfaces: backend, admin web, and mobile app" },
  { value: "36", label: "admin web app route files in the dashboard surface" },
  { value: "80", label: "mobile app route files in the Expo app layer" },
  { value: "13+", label: "versioned backend route groups mounted under `/api/v1`" },
];

const roleSurfaces = [
  {
    title: "End user mobile experience",
    text: "The mobile app handles onboarding, login, 2FA, biometric lock, wallet views, buy and sell flows, transfer, swap, receive by QR, activity, education, and support.",
  },
  {
    title: "Agent operations",
    text: "Agents are a first-class operating role with registration, KYC, deposit addresses, withdrawal requests, dashboard metrics, reviews, and handling responsibilities for mint and burn requests.",
  },
  {
    title: "Merchant and payment layer",
    text: "The backend includes merchants, payment requests, merchant payments, settlement-related logic, and merchant verification, which expands the platform beyond simple P2P exchange.",
  },
  {
    title: "Admin and compliance layer",
    text: "The admin dashboard spans user management, agent management, withdrawals, disputes, escrows, financial operations, education progress, and security management.",
  },
];

const systemBreakdown = [
  {
    title: "Mint and burn lifecycle",
    text: "AfriX models buying tokens as an agent-confirmed mint flow and selling tokens as an escrow-backed burn flow. That split creates a stronger transaction design than a vague one-step exchange button.",
  },
  {
    title: "Escrow and dispute handling",
    text: "Burn requests lock tokens in escrow first, then move through fiat proof, user confirmation, expiry, or dispute. Background jobs and admin controls reinforce the operational safety model.",
  },
  {
    title: "Transfer and swap system",
    text: "The platform also supports instant peer-to-peer transfers and in-app token swaps, giving users more than one transaction mode and making the wallet layer much more useful.",
  },
  {
    title: "Education and terminology controls",
    text: "The backend includes education routes, progress tracking, and terminology-safe language guidance. That suggests intentional product design around comprehension, trust, and regulatory sensitivity.",
  },
];

const architecture = [
  "Backend API in Express with PostgreSQL/Sequelize, optional Redis, background jobs, structured services, and versioned route groups",
  "Admin web dashboard in Next.js for operations, financial review, dispute handling, security workflows, and reporting",
  "Expo mobile app with Expo Router, SecureStore, notifications, biometrics, QR code flows, and Zustand stores",
  "Blockchain layer with Hardhat scripts, token contracts, treasury tooling, and verification helpers for testnet-oriented asset workflows",
];

const evidencePoints = [
  "The repo is explicitly structured around `afriX_backend`, `afrix-web`, and `afriX-mobile`, showing a coordinated multi-surface product rather than one app with extra screens.",
  "Lifecycle docs detail mint, burn, send, receive, and swap flows, including statuses, timeouts, escrow behavior, disputes, and which surface handles each step.",
  "The backend mounts route groups for auth, agents, requests, wallets, transactions, merchants, payments, escrows, disputes, education, notifications, users, and admin.",
  "The mobile app includes biometric security, push notification setup, transfer listeners, QR-based receive flows, and dedicated store slices for auth, wallet, mint, burn, swap, transfer, agent, and education.",
];

export default function AfriXCaseStudyPage() {
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
                AfriX is a multi-surface token exchange platform spanning mobile trading, agent operations, admin governance, and blockchain-connected transaction flows.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                This project is notably different from a normal fintech landing page or wallet
                app. The codebase shows a coordinated system with a PostgreSQL API, a dedicated
                admin dashboard, and an Expo mobile experience built around mint, burn, transfer,
                swap, escrow, dispute, and compliance-heavy flows.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="http://afri-x.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Token exchange platform
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
                A fintech workflow system, not just an exchange interface.
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
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7ff64]">Role-based product design</p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  The platform is shaped around distinct users with different responsibilities.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                AfriX has stronger operational complexity than a single-audience fintech app,
                because users, agents, merchants, and admins all interact with different parts
                of the system.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {roleSurfaces.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#8ea7ff]/25 bg-[#8ea7ff]/10"
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
                Three coordinated apps with backend operations and blockchain support.
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
                        ? "border-[#8ea7ff]/30 bg-[#8ea7ff]/10 text-[#e5ebff]"
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
                  The most distinctive part of AfriX is the way transaction modes are modeled
                  differently instead of being collapsed into one abstract wallet action. Mint,
                  burn, transfer, and swap each have their own operational logic and risk model.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The core workflows reveal careful product thinking around trust and control.
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
                Concrete codebase signals behind the case-study claims.
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
                  AfriX demonstrates NEXGEN working on a trust-sensitive financial product where
                  state transitions, role permissions, operational visibility, and dispute
                  handling all matter. That is a more demanding product challenge than standard
                  payments UI alone.
                </p>
                <p>
                  It also broadens the portfolio narrative: NEXGEN is not only building
                  commerce and ops systems, but also exchange-style transaction infrastructure
                  with mobile delivery, admin oversight, and blockchain-aware implementation.
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

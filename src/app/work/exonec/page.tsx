import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "Multi-tenant WhatsApp bot engine that routes customer messages per client, loads business-specific FAQ data, and applies subscription-aware response behavior.",
  "Client self-service dashboard for profile management, FAQ editing, settings, subscription visibility, and usage stats without needing developer intervention for every content change.",
  "Admin platform for viewing clients, filtering by status and tier, checking system metrics, and managing subscription-level operations from one control surface.",
  "Payment and subscription automation built around trials, paid tiers, Paystack payment links, webhook-driven activation, and automatic service halt on expiry.",
  "Onboarding and acquisition flow through a dedicated web app with marketing pages, lead capture, contact routes, and admin email notifications.",
];

const stack = [
  "Node.js",
  "Express",
  "MongoDB Atlas",
  "Baileys",
  "JWT",
  "bcrypt",
  "Paystack",
  "Next.js 15",
  "React",
  "TypeScript",
  "Resend",
  "Railway",
  "Vercel",
];

const metrics = [
  { value: "2", label: "coordinated surfaces: bot and API backend plus separate web onboarding and dashboard frontend" },
  { value: "29", label: "backend source files across bot logic, API server, models, auth, payment, cache, monitoring, and subscriptions" },
  { value: "48", label: "frontend app files covering landing, onboarding, login, dashboard, FAQs, settings, admin, and payment flows" },
  { value: "4", label: "subscription tiers modeled across trial, starter, professional, and enterprise" },
];

const valueThemes = [
  {
    title: "A SaaS layer on top of messaging automation",
    text: "Exonec is not just a WhatsApp bot script. The repo clearly evolves it into a commercial platform with onboarding, subscriptions, auth, dashboards, admin tooling, and billing operations.",
  },
  {
    title: "Multi-tenant by design",
    text: "The backend is built around serving multiple businesses from one bot infrastructure, with client-specific FAQs, limits, statuses, and configuration loaded dynamically per tenant.",
  },
  {
    title: "Operations and monetization are first-class",
    text: "Trials, payment links, webhook verification, expiry checks, rate limits, and support for account states make the product feel like a managed service rather than a one-off deployment.",
  },
  {
    title: "Non-technical clients can control their system",
    text: "The dashboard pages for FAQs, settings, stats, and account management matter because they shift Exonec from custom implementation work toward repeatable product delivery.",
  },
];

const architecture = [
  "WhatsApp bot and Express API backend deployed together, handling message routing, client lookup, subscription enforcement, auth, payment events, and monitoring",
  "Next.js web frontend deployed separately for marketing, onboarding, login, client dashboard, admin dashboard, and payment callback flows",
  "MongoDB-backed client and message storage with cache and monitoring services to reduce repeated lookups and keep the free-tier-friendly deployment practical",
  "Platform ops layer spanning JWT authentication, password hashing, payment verification, admin approval flows, and email notifications via Resend",
];

const systemBreakdown = [
  {
    title: "Bot and FAQ matching layer",
    text: "The backend includes bot runtime logic, WhatsApp client integration, FAQ matching, social-media helpers, and client-loading services, showing that responses are generated from structured business configuration rather than hardcoded replies.",
  },
  {
    title: "Subscription and limit enforcement",
    text: "The system models trials, active and expired states, message limits by tier, and automatic service halt behavior. That is a strong product signal because platform rules are enforced in code, not manually tracked by the team.",
  },
  {
    title: "Client and admin dashboards",
    text: "The web app includes login, dashboard, FAQ management, settings, upgrade flow, admin login, admin client views, and admin analytics routes, which turns the service into a manageable product for both customers and operators.",
  },
  {
    title: "Onboarding and conversion flow",
    text: "Lead capture, contact pages, onboarding forms, payment link creation, callback verification, and admin email notifications create a complete path from prospect to activated customer.",
  },
];

const evidencePoints = [
  "The progress docs explicitly describe a multi-tenant bot, subscription management, Paystack payment links, webhook activation, caching, monitoring, and a production-ready MVP deployed on Railway and Vercel.",
  "The backend source tree includes dedicated services for clients, admins, subscriptions, payments, rate limiting, caching, and monitoring rather than a single combined bot file.",
  "The frontend app structure includes customer-facing routes for onboarding, login, FAQs, settings, upgrades, and admin surfaces for client management and system stats.",
  "The project docs repeatedly frame Exonec as a business platform with lifecycle automation, pricing tiers, onboarding approvals, and support workflows, not just a technical bot integration.",
];

export default function ExonecCaseStudyPage() {
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
                Exonec is a WhatsApp automation SaaS that turns bot infrastructure into a client-manageable, subscription-backed product.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                The project starts from a simple FAQ auto-reply idea, but the repo shows a much
                more complete platform: multi-tenant bot logic, billing automation, onboarding,
                dashboard management, and admin oversight for businesses running customer support
                through WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://exonec.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: WhatsApp SaaS platform
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
                A customer-support automation platform with real product operations around it.
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
                  The real value is not the bot alone, but the repeatable service model around it.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/62">
                Exonec becomes much more compelling when you read it as infrastructure for many
                businesses, with clear controls for acquisition, billing, support, and account
                lifecycle management.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#73f0af]/25 bg-[#73f0af]/10"
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
                One product across bot runtime, API operations, and a separate web control layer.
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
                        ? "border-[#73f0af]/30 bg-[#73f0af]/10 text-[#e1fff0]"
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
                <p className="text-sm uppercase tracking-[0.22em] text-white/45">Why it stands out</p>
                <p className="mt-4 text-base leading-8 text-white/72">
                  Exonec stands out because it productizes what is often delivered as bespoke
                  client work. The repo shows a clear move from custom WhatsApp setup into a
                  reusable SaaS workflow with customer autonomy and platform controls.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">System breakdown</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The product gets stronger the more you look at lifecycle and platform operations.
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
                The implementation supports the SaaS framing directly.
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

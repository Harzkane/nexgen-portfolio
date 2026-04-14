import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const coreSystems = [
  "URL shortener with analytics, QR generation, and link-management utility value for client work",
  "Transactional email API layer prepared for Resend and production email workflows",
  "WhatsApp messaging integration path built around Twilio and automation-friendly service logic",
  "Developer dashboard with usage tracking, billing context, authentication, referrals, and admin controls",
  "Deployment and infrastructure model optimized specifically for Oracle Cloud free-tier constraints",
];

const stack = [
  "Python",
  "Flask",
  "SQLite",
  "Flask-Login",
  "Flask-WTF",
  "Flask-Limiter",
  "Resend",
  "Twilio",
  "Paystack",
  "Chart.js",
  "Oracle Cloud",
  "Cloudflare",
  "Sentry",
  "Gunicorn",
];

const metrics = [
  { value: "32", label: "project files in the lean application surface" },
  { value: "11", label: "HTML templates driving the product and auth flows" },
  { value: "1GB", label: "target Oracle Cloud free-tier RAM budget the app was designed around" },
  { value: "4+", label: "utility products bundled into one developer-facing toolkit" },
];

const valueThemes = [
  {
    title: "Built for constraints",
    text: "NaijaDevHub is unusual because the technical story is part of the product story. It is designed to run on a tiny free-tier cloud server, which pushes the build toward efficiency, pragmatism, and operational discipline.",
  },
  {
    title: "Developer utility as product",
    text: "Instead of trying to be a broad social platform, it bundles immediately useful services Nigerian developers can resell or use in client projects: link management, email, WhatsApp, billing, and dashboard tooling.",
  },
  {
    title: "SaaS thinking, lean stack",
    text: "The code and docs show a product mindset focused on subscriptions, user isolation, plans, payments, onboarding, and recurring value rather than a one-off script collection.",
  },
  {
    title: "Monetization-aware design",
    text: "The surrounding docs repeatedly frame the platform in terms of time saved, revenue enabled, and operational value. That makes this case study as much about product packaging as it is about implementation.",
  },
];

const architecture = [
  "Single Flask application with template-driven UI, API endpoints, auth blueprint, and SQLite-backed persistence",
  "Session-based dashboard experience layered alongside API-key-based programmatic access",
  "Utility integrations for Resend, Twilio, Paystack, QR generation, analytics, and monitoring",
  "Deployment scripts and docs tuned for Oracle Cloud free-tier hosting, memory limits, swap configuration, and secure service setup",
];

const evidencePoints = [
  "The app bootstraps Flask-Login, CSRF protection, rate limiting, session hardening, and API-key auth inside one compact codebase.",
  "The requirements file includes Flask, Flask-Login, Flask-WTF, Flask-Limiter, Resend, Twilio, QR support, Pillow, and Sentry.",
  "The templates folder covers landing, dashboard, auth, admin, billing success, and utility views, showing a real product flow rather than a raw API server.",
  "Progress docs describe the platform as production-ready with custom domain, Cloudflare, Paystack billing, user authentication, referral logic, and security hardening.",
];

export default function NaijaDevHubCaseStudyPage() {
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
                NaijaDevHub is a lean developer SaaS toolkit built to create real utility on extremely limited infrastructure.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                This project is different from the others in the portfolio because it is not a
                marketplace or financial platform. It is a compact productized toolkit for
                Nigerian developers and small operators who want practical APIs, automation
                helpers, and monetizable utilities on low-cost infrastructure.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://naijadevhub.online"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-7 py-4 font-semibold text-[#091014]"
                >
                  Visit live project
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/72">
                  Category: Developer tools SaaS
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
                A compact utility platform with clear commercial use cases for developers and small teams.
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
            <div className="grid gap-5 lg:grid-cols-2">
              {valueThemes.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[30px] border p-7 ${
                    index === 0
                      ? "border-[#7df9c6]/20 bg-[#7df9c6]/10"
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
                Lightweight architecture shaped around delivery speed and free-tier survivability.
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
                        ? "border-[#c2a8ff]/30 bg-[#c2a8ff]/10 text-[#f1e8ff]"
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
                  NaijaDevHub stands out because the product promise is tightly connected to
                  the deployment strategy. The project is designed not only to work, but to
                  work cheaply, reliably, and in a way a local developer can actually sustain.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7df9c6]">Repo evidence</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                Concrete signals in the codebase that make this more than a demo toolkit.
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

            <div className="rounded-[32px] border border-white/8 bg-[#12181d] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c98b]">Product framing</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-white">
                The real story here is utility, monetization, and local relevance.
              </h2>
              <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
                <p>
                  The surrounding analysis and progress documents consistently frame the
                  platform around saved time, enabled revenue, and practical value for
                  developers and small business operators.
                </p>
                <p>
                  That makes NaijaDevHub a good example of NEXGEN building not only features,
                  but a product narrative around cost, context, and real-world usage in the
                  local market.
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
